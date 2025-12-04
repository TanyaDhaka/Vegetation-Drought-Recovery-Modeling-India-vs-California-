// ---------------------------
// Load Regions
// ---------------------------
var india = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017')
    .filter(ee.Filter.eq('country_na', 'India'))
    .geometry();

var california = ee.FeatureCollection('TIGER/2018/States')
    .filter(ee.Filter.eq('NAME', 'California'))
    .geometry();

// ---------------------------
// MODIS NDVI
// ---------------------------
var ndvi = ee.ImageCollection('MODIS/006/MOD13A2')
    .select('NDVI')
    .map(function(img){
      return img.divide(10000).rename('NDVI')
                .copyProperties(img, img.propertyNames());
    });

// ---------------------------
// Monthly NDVI
// ---------------------------
var start = ee.Date('2002-01-01');
var end   = ee.Date('2024-12-31');

var months = ee.List.sequence(0, end.difference(start, 'month'));

var monthlyNDVI_raw = ee.ImageCollection.fromImages(
  months.map(function(m) {
    var date = start.advance(m, 'month');
    var monthly = ndvi.filterDate(date, date.advance(1, 'month')).mean();

    return monthly
      .set('year', date.get('year'))
      .set('month', date.get('month'));
  })
);

// ---------------------------
// FILTER OUT EMPTY IMAGES
// ---------------------------
var monthlyNDVI = monthlyNDVI_raw.filter(ee.Filter.listContains('system:band_names', 'NDVI'));

print("Monthly images after filtering:", monthlyNDVI.size());
print("First image:", monthlyNDVI.first());
print("Bands:", monthlyNDVI.first().bandNames());

// ---------------------------
// Region Time Series Function
// ---------------------------
function regionMeanTS(regionGeom) {
  return monthlyNDVI.map(function(img){
    var mean = img.reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: regionGeom,
      scale: 1000,
      maxPixels: 1e13
    });

    return ee.Feature(null, {
      'year': img.get('year'),
      'month': img.get('month'),
      'NDVI': mean.get('NDVI')
    });
  });
}

// ---------------------------
// Build TS
// ---------------------------
var indiaTS = regionMeanTS(india);
var californiaTS = regionMeanTS(california);

// ---------------------------
// Export
// ---------------------------
Export.table.toDrive({
  collection: indiaTS,
  description: 'India_timeseries',
  fileFormat: 'CSV'
});

Export.table.toDrive({
  collection: californiaTS,
  description: 'California_timeseries',
  fileFormat: 'CSV'
});

