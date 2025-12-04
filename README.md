**Vegetation Drought Response & Recovery**
  **A Cross-Continental Analysis: Western Ghats (India) vs Central California (USA)**

**Overview**
This project analyzes how vegetation in two contrasting climate regimes responds to drought conditions, focusing on NDVI, VPD, and soil moisture. 
It demonstrates skills in: 
  Remote sensing 
  Ecohydrology 
  Time-series analysis 
  Climate–vegetation interactions 
  Google Earth Engine + Python workflows 

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

├── code/ 
│   ├── gee_ndvi_pipeline.js 
│   └── analysis.ipynb 
├── data/ 
│   ├── India_timeseries.csv 
│   ├── California_timeseries.csv 
├── figures/ 
│   ├── ndvi_anomaly.png 
│   ├── vpd_vs_ndvi.png 
├── notes/ 
│   └── methods.md 
├── results/ 
│   └── summary.pdf 
└── README.md 
 
**Relevance to PhD Research**
This project demonstrates: 
  Independent research capability 
  Experience with remote sensing datasets 
  Understanding of ecohydrological processes 
  Ability to compare ecosystems across climate regimes 



 
