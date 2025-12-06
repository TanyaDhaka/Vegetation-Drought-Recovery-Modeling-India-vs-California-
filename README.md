**Vegetation–Climate Dynamics Across Monsoon and Mediterranean Systems (2002–2024)**
**A comparative ecohydrology analysis of India and California using Google Earth Engine & Python**
 
**Overview**
This project examines how vegetation in two contrasting climate regimes:
monsoon-driven Western Ghats of India and the Mediterranean climate of Central California -
responds to long-term variability in rainfall, soil moisture, and vapor pressure deficit (VPD) from 2002–2024.

Using Google Earth Engine (GEE) and Python, I built a unified workflow to:
  * Generate monthly NDVI, rainfall, soil moisture, and VPD time series
  * Compute climatologies, standardized anomalies, and drought metrics
  * Quantify lagged correlations between vegetation and climate drivers
  * Compare ecosystem sensitivity across hydrologically distinct landscapes
This repository contains all scripts, figures, and outputs associated with the analysis.

**Repository Structure**
project-root/ 

├── data/               # Exported CSV time series for India & California 

├── figs/               # All plots (climatology, anomalies, lag correlations) 

├── gee_code/           # Full GEE script for data extraction 

├── notebooks/          # Python notebooks for analysis & visualization 

└── README.md           # (This file) 

**Key Methods** 
  1. Google Earth Engine Processing 
     * MODIS NDVI (MOD13A2) 
     * CHIRPS rainfall (daily) 
     * GLDAS NOAH soil moisture (0–10 cm) 
     * ERA5-Land temperature & dewpoint → derived VPD 
     * Monthly means generated for 2002–2024 
     * Region-level mean statistics for: 
     * **India** 
     * **California** 

   2. Python Analysis
      * Standardized NDVI anomaly construction 
      * Seasonal climatologies 
      * Lag correlations (−6 to +6 months) for: 
      * NDVI–Rainfall 
      * NDVI–Soil Moisture 
      * NDVI–VPD 
      * Cross-region comparison of seasonal cycles and anomaly behavior 

**Results Summary** 
1. Seasonal NDVI Patterns 
   * India shows strong monsoon-driven peak greenness (Aug–Oct). 
   * California maintains a flatter seasonal cycle with muted summer declines. 
2. NDVI Anomalies (2002–2024) 
    * India exhibits high-amplitude, rainfall-synchronized variability. 
    * California anomalies are weakly seasonal, reflecting persistent water limitation. 
3. Lag Correlation Insights 
   *California (Mediterranean)* 
     * VPD is the dominant vegetation stressor (peak correlation ~0.46 around −3 months). 
     * Soil moisture plays a smaller role; rainfall correlations are weak. 
     * Vegetation greenness often responds before moisture availability improves—consistent with chronic drought and energy-limited stress. 
    *India (Monsoon)* 
      * Rainfall and soil moisture show strong lagged relationships (0.4–0.45 at +1 to +2 months). 
      * NDVI tightly tracks monsoon timing. 
      * VPD has a high negative correlation at −6 to −3 months, indicating pre-monsoon atmospheric stress. 
4. Ecosystem Interpretation 
      * India’s vegetation is hydrology-driven, responding primarily to precipitation and stored water. 
      * California’s vegetation is atmosphere-driven, responding to evaporative demand (VPD) more than rainfall. 
      * These contrasting sensitivities point to distinct resilience pathways under climate variability. 

**Representative Figures**
### **Seasonal NDVI Climatology**
<img src="figures/NDVI_climatology.png" width="650">

### **NDVI Anomalies (2002–2024)**
<img src="figures/NDVI_anomalies.png" width="650">

### **California – NDVI–Climate Lag Correlations**
<img src="figures/California ndvi-climate lag correlations.png" width="650">

### **India – NDVI–Climate Lag Correlations**
<img src="figures/India ndvi climate lag correlations.png" width="650"> 

**Full code is available in /code/.** 
**Python notebooks available in /notes/.**
 
**Relevance to PhD Research**
This project demonstrates: 
  Experience with remote sensing datasets 
  Understanding of ecohydrological processes 
  Ability to compare ecosystems across climate regimes 



 
