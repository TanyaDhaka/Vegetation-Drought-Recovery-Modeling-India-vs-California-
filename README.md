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

**Study Regions** 
  **Western Ghats, India** 
      Monsoon-driven rainfall 
      Strong seasonal greening pulses 
      Rapid vegetation response to rainfall 
      
  **Central California, USA**
      Winter rainfall and long dry summers 
      Strong VPD sensitivity 
      Multi-year droughts with slow recovery 

**Datasets Used**
    **Vegetation** 
        MODIS NDVI (MOD13A2, 16-day) 

  **Climate and Hydrology**
        CHIRPS Rainfall 
        ERA5-Land VPD 
        ESA CCI Soil Moisture 

**Processing Platform**
  Google Earth Engine (GEE) 

**Methods** 
The workflow consists of: 
  Extracting 2002–2024 monthly composites 
  Computing NDVI, VPD, and soil moisture anomalies 
  Building time-series for both regions 
  Running lag correlations between NDVI and: 
    rainfall 
    VPD 
    soil moisture 
  Creating publication-style figures 

**Full code is available in /code/.** 

**Key Results & Figures**
NDVI Anomaly Time Series (2002–2024) 
<img width="1188" height="490" alt="NDVI_anomalies" src="https://github.com/user-attachments/assets/872726e5-b4cc-4144-9e35-5a695780e2f4" />

**Insights:** 
  Western Ghats NDVI tracks monsoon rainfall 
  California NDVI declines sharply during 2012–2016 drought 
  California shows slower post-drought recovery 

**VPD vs NDVI Anomaly (California)**
![VPD vs NDVI](figures/vpd_vs_ndvi.png) 
 
**Interpretation:**
  Strong negative correlation during drought years 
  High VPD suppresses vegetation productivity 

**Summary of Findings**
  India’s vegetation is tightly coupled to monsoon rainfall. 
  California vegetation is primarily controlled by VPD, not rainfall. 
  Lag correlations show: 
    India NDVI aligns with rainfall (short lag) 
    California NDVI aligns with soil moisture and VPD (long lag) 
  Recovery is faster in India, slower in California due to hydrological memory. 

**Repository Structure**

<img width="234" height="242" alt="repo_structure" src="https://github.com/user-attachments/assets/f2ad2ce8-cb12-46dc-89ae-13c842a7a5ba" />

 
**Relevance to PhD Research**
This project demonstrates: 
  Independent research capability 
  Experience with remote sensing datasets 
  Understanding of ecohydrological processes 
  Ability to compare ecosystems across climate regimes 



 
