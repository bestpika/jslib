/*
 * 參照
 * http://www.sunriver.com.tw/taiwanmap/grid_tm2_convert.php
 * http://give.pixnet.net/blog/post/29361221
 * https://gis-tech.blogspot.com/2008/11/quantum-gis_24.html

 * https://www.ptt.cc/bbs/GIS/M.1405099804.A.F9C.html
 * 備份: https://web.archive.org/save/https://www.ptt.cc/bbs/GIS/M.1405099804.A.F9C.html

 * http://mutolisp.logdown.com/posts/207563 (這裡的才是正確的)
 * 備份: https://archive.is/Y5Gi8
 * 備份: https://web.archive.org/web/20180820084901/http://mutolisp.logdown.com/posts/207563

 * https://gis.rchss.sinica.edu.tw/qgis/?p=2823
 * https://gis.rchss.sinica.edu.tw/qgis/?p=3542

 * QGIS 內建 proj4 參數
 * https://epsg.io
 * https://epsg.io/3826.proj4
 */
'use strict'
/* global proj4 */
proj4.defs([
  ['EPSG:3821', '+proj=longlat +lat_0=0 +lon_0=121 +k=0.9999 +x_0=250000 +y_0=0 +ellps=aust_SA +units=d +no_defs +towgs84=-752,-358,-179,-0.0000011698,0.0000018398,0.0000009822,0.00002329'],
  ['EPSG:3826', '+proj=tmerc   +lat_0=0 +lon_0=121 +k=0.9999 +x_0=250000 +y_0=0 +ellps=GRS80   +units=m +no_defs +towgs84=0,0,0,0,0,0,0'],
  ['EPSG:3828', '+proj=tmerc   +lat_0=0 +lon_0=121 +k=0.9999 +x_0=250000 +y_0=0 +ellps=aust_SA +units=m +no_defs +towgs84=-752,-358,-179,-0.0000011698,0.0000018398,0.0000009822,0.00002329']
])
proj4.defs([
  ['EPSG:102443', proj4.defs('EPSG:3826')],
  ['TWD67', proj4.defs('EPSG:3828')],
  ['TWD67TM3', ' +proj=tmerc   +lat_0=0 +lon_0=121 +k=1      +x_0=350000 +y_0=0 +ellps=aust_SA +units=m +no_defs +towgs84=-752,-358,-179,-0.0000011698,0.0000018398,0.0000009822,0.00002329'],
  ['TWD97', proj4.defs('EPSG:3826')]
])
