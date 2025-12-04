//--------------------------------------
// 1. Define Regions
//--------------------------------------
var india = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017')
    .filter(ee.Filter.eq('country_na', 'India'))
    .geometry();

var california = ee.FeatureCollection('TIGER/2018/States')
    .filter(ee.Filter.eq('NAME', 'California'))
    .geometry();

//--------------------------------------
// 2. Load Datasets
//--------------------------------------

// NDVI (MODIS)
var ndvi = ee.ImageCollection('MODIS/006/MOD13A2')
    .select('NDVI')
    .map(function(img){
      return img.divide(10000)
                .rename('NDVI')
                .copyProperties(img, img.propertyNames());
    });

// Rainfall
var rainfall = ee.ImageCollection('UCSB-CHG/CHIRPS/DAILY')
                  .select('precipitation')
                  .map(function(img){ return img.rename('Rain'); });

// Soil Moisture
var soilm = ee.ImageCollection('NASA/SMAP/SPL4SMGP/007')
               .select('soil_moisture_rootzone')
               .map(function(img){ return img.rename('SoilM'); });

// VPD (ERA5)
var era5 = ee.ImageCollection('ECMWF/ERA5_LAND/MONTHLY')
              .select(['dewpoint_temperature_2m','temperature_2m']);

var computeVPD = function(img) {
  var t = img.select('temperature_2m').subtract(273.15);
  var d = img.select('dewpoint_temperature_2m').subtract(273.15);

  var svp = t.expression('0.6108 * exp((17.27*T)/(T+237.3))', {T:t});
  var avp = d.expression('0.6108 * exp((17.27*T)/(T+237.3))', {T:d});

  return svp.subtract(avp)
            .rename('VPD')
            .copyProperties(img, img.propertyNames());
};

var vpd = era5.map(computeVPD);

//--------------------------------------
// 3. Monthly means (2002–2024)
//--------------------------------------
var start = ee.Date('2002-01-01');
var end   = ee.Date('2024-12-31');
var nMonths = end.difference(start, 'month');

function monthlyMean(ic, bandName) {
  return ee.ImageCollection(
    ee.List.sequence(0, nMonths.subtract(1)).map(function(m){
      var t0 = start.advance(m,'month');
      var t1 = t0.advance(1,'month');

      var img = ic.filterDate(t0, t1).mean();
      return img.rename(bandName)
               .set('year', t0.get('year'))
               .set('month', t0.get('month'));
    })
  );
}

// Build aligned monthly collections
var mNDVI = monthlyMean(ndvi,  'NDVI');
var mRain = monthlyMean(rainfall, 'Rain');
var mSoil = monthlyMean(soilm, 'SoilM');
var mVPD  = monthlyMean(vpd, 'VPD');

//--------------------------------------
// 4. Join all variables into ONE collection
//--------------------------------------
var joined = mNDVI.map(function(img){

  var y = img.get('year');
  var m = img.get('month');

  var rainImg = mRain.filter(ee.Filter.eq('year', y))
                     .filter(ee.Filter.eq('month', m))
                     .first();

  var soilImg = mSoil.filter(ee.Filter.eq('year', y))
                     .filter(ee.Filter.eq('month', m))
                     .first();

  var vpdImg  = mVPD.filter(ee.Filter.eq('year', y))
                    .filter(ee.Filter.eq('month', m))
                    .first();

  return img.addBands([rainImg, soilImg, vpdImg]);
});

//--------------------------------------
// 5. Region time series
//--------------------------------------
function regionTS(region, regionName) {
  return joined.map(function(img){
    var stats = img.reduceRegion({
      reducer: ee.Reducer.mean(),
      geometry: region,
      scale: 5000,
      maxPixels: 1e13
    });

    return ee.Feature(null, {
      region: regionName,
      year:   img.get('year'),
      month:  img.get('month'),
      NDVI:   stats.get('NDVI'),
      Rain:   stats.get('Rain'),
      SoilM:  stats.get('SoilM'),
      VPD:    stats.get('VPD')
    });
  });
}

var indiaTS = regionTS(india,'India');
var calTS   = regionTS(california,'California');

//--------------------------------------
// 6. Export
//--------------------------------------
Export.table.toDrive({
  collection: indiaTS,
  description: 'India_timeseries',
  fileFormat: 'CSV'
});

Export.table.toDrive({
  collection: calTS,
  description: 'California_timeseries',
  fileFormat: 'CSV'
});

