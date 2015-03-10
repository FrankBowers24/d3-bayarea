



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
5.  Notice how the pie chart changes when you click on different zip code regions.  The pie chart changes are most interesting when the change in data is greatest (Marin vs East Oakland).

I got all the data and map boundaries directly from the Census Bureau and the IRS and converted it to JSON using QGIS, ogr2ogr, and node.js scripts that I wrote.

I downloaded cb_2013_us_zcta510_500k.shp, 2013 Census Bureau Zip Code Tabulation Area boundaries 

I used QGIS 2.6 to filter out zip code tabulation area boundaries for the Bay Area from the national census shapefile.

I used ogr2ogr to convert census shapefiles to GEOJSON for d3.

ogr2ogr -f geoJSON -select GEOID10  Bay_Area.json Bay_Area.shp -simplify 0.001

The zip code boundary file did not include place names so I used the web service ziptasticapi.com to get a place name for each zip code.

Income data is based on IRS statistics on the number of tax returns filed in 2012 tabulated by Adjusted Gross Income (12zp05ca )

For Race and Enthnicity data I downloaded 2010 census data called HISPANIC OR LATINO, AND NOT HISPANIC OR LATINO BY RACE
Universe: Total population  2010 Census Summary File   // DEC_10_SF1_P9.csv

If you enter a city name all the zip codes for the city are selected and the city is animated to the center of the map.  The data shown in the pie chart is aggregated from all the selected zip codes.

ACS_13_5YR_DP04
2   Zip Code (zip code in second column)

176, HC01_V63 Occupied housing units
180, HC01_VC64 Occupied housing units - Owner-occupied
184, HC01_VC65 Occupied housing units - Renter-occupied

1.  Rent vs Own

200 HC01-VC74 Occupied housing Units - Moved in 2010 or later
204 HC01_VC75   - Moved in 2000 to 2009
208 HC01_VC76  - Moved in 1990 to 1999
212 HC01-VC77  - Moved in 1980 to 1989
216 HC01-VC78  -Moved in 1970 to 1979
220 HC01-VC79  - Moved in 1969 or earlier

432 HC01 -VC157 selected monthly owner costs as a % of household income

496 HC01-VC181 GROSS RENT - Occupied units paying rent

536 HC01_VC196 GROSS RENT as a percentage of household income
---------------------

SELECTED SOCIAL CHARACTERISTICS IN THE UNITED STATES  more information
2009-2013 American Community Survey 5-Year Estimates  (ACS_13_5YR_DP02_with_ann.csv  1/19 10:00 AM)

1. Education
2. Place of Birth/Citizenship
3. Language

4 Total Households
52 Households with one or more people under 18 years
56 Households with one or more people 65 years and over

Education
2 zip code
232 HC01_VC85 population 25 years and over
236 HC01_VC86 less than 9th grade
240 HC01_VC87 9th to 12 grade, no diploma
244 HC01_VC88 High school graduate
248 HC01_VC89 Some College, no degree
252 HC01_VC90 Associate's degree
256 HC01_VC91 Bachelor's degree
260 HC01_VC92 Graduate or professional degree

Place of Birth
344 PLACE OF BIRTH - Total population
348 Native
352 Native - USA
356 Native - California
360 Native - USA, not California
368 Foreign Born

Foreign Born
412 Foreign Born - Total
416 Foreign Born - Europe
420 Foreign Born - Asia
424 Foreign Born - Africa
428 Foreign Born - Oceania
432 Foreign Born - Latin America
436 Foreign Born - Canada

Language
440 Language spoken at home - population 5 years and over
444 English only
448 Language other than English
456 Spanish
464 Other Indo-European languages
474 Asian and Pacific Islander languages
480 Other languages




SELECTED HOUSING CHARACTERISTICS  more information
2009-2013 American Community Survey 5-Year Estimates (ACS_13_5YR_DP04_with_ann.csv)


ASIAN ALONE BY SELECTED GROUPS
Universe: Total Asian alone population  more information
2009-2013 American Community Survey 5-Year Estimates  (AFF Download (4) - ACS_13_5YR_B02006_with_ann.csv)
  // *** omit Malaysian and Sri Lankan ***
