



Bay Area Stats by Zip Code

This is a mashup of many D3 examples:

1. Choropleth
2. Zoom USA map
3. Pie chart with labels
4. D3 legend

Try out Bay Area Stats:

1.  Click, pan and zoom the map
2.  Enter a city name or zip code and click Select
3.  Change the comboBox to see Race/Ethnicity
4.  Select Race: Asian and select Asian nationalities
5.  Notice how the pie chart changes when you click on different zip code regions.  The pie chart changes are most interesting when the change in data is greatest.

I got all the data and map boundaries directly from the Census Bureau and the IRS and converted it to JSON using QGIS, ogr2ogr, and node.js scripts that I wrote.

I downloaded cb_2013_us_zcta510_500k.shp, 2013 Census Bureau Zip Code Tabulation Area boundaries 

I used QGIS 2.6 to filter out zip code tabulation area boundaries for the Bay Area from the national census shapefile.

I used ogr2ogr to convert census shapefiles to GEOJSON for d3.

ogr2ogr -f geoJSON -select GEOID10  Bay_Area.json Bay_Area.shp -simplify 0.001

The zip code boundary file did not include place names so I used the web service ziptasticapi.com to get a place name for each zip code.

If you enter a city name all the zip codes for the city are selected and the city is animated to the center of the map.  The data shown in the pie chart is aggregated from all the selected zip codes.

