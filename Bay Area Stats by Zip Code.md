



Bay Area Stats by Zip Code

I downloaded cb_2013_us_zcta510_500k.shp, 2013 Census Bureau Zip Code Tabulation Area boundaries 

I used QGIS 2.6 to filter out zip code tabulation area boundaries for the Bay Area from the national census shapefile.

I used ogr2ogr to convert census shapefiles to GEOJSON for d3.

ogr2ogr -f geoJSON -select GEOID10  Bay_Area.json Bay_Area.shp -simplify 0.001

The zip code boundary file did not include place names so I used the web service ziptasticapi.com to get a place name for each zip code.

Income data is based on IRS statistics on the number of tax returns filed in 2012 tabulated by Adjusted Gross Income (12zp05ca )

For Race and Enthnicity data I downloaded 2010 census data called HISPANIC OR LATINO, AND NOT HISPANIC OR LATINO BY RACE
Universe: Total population  2010 Census Summary File   // DEC_10_SF1_P9.csv

Index,
1,GEO.id2,Id2  // Zip Code
3,D001,Total:
4,D002,Hispanic or Latino
7,D005,Not Hispanic or Latino: - Population of one race: - White alone
8,D006,Not Hispanic or Latino: - Population of one race: - Black or African American alone
9,D007,Not Hispanic or Latino: - Population of one race: - American Indian and Alaska Native alone
10,D008,Not Hispanic or Latino: - Population of one race: - Asian alone
11, D009,Not Hispanic or Latino: - Population of one race: - Native Hawaiian and Other Pacific Islander alone
12, D010,Not Hispanic or Latino: - Population of one race: - Some Other Race alone
13, D011,Not Hispanic or Latino: - Two or More Races:


color for race pie: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"]
colors for race density: 

<select name="statType">
	<option value="0">Income</option>
	<option value="1">Race/Ethnicity</option>
</select>

<select name="raceList" >
  <option value="1">Hispanic or Latino</option>
  <option value="2">White</option>
  <option value="3">African American</option>
  <option value="4">Native American</option>
  <option value="5">Asian</option>
  <option value="6">Pacific Islander</option>
  <option value="7">Other Race</option>
  <option value="8">Mixed Race</option>
</select>
<button type="button">Refresh</button>


SELECTED SOCIAL CHARACTERISTICS IN THE UNITED STATES  more information
2009-2013 American Community Survey 5-Year Estimates  (ACS_13_5YR_DP02_with_ann.csv  1/19 10:00 AM)


SELECTED HOUSING CHARACTERISTICS  more information
2009-2013 American Community Survey 5-Year Estimates (ACS_13_5YR_DP04_with_ann.csv)


ASIAN ALONE BY SELECTED GROUPS
Universe: Total Asian alone population  more information
2009-2013 American Community Survey 5-Year Estimates  (AFF Download (4) - ACS_13_5YR_B02006_with_ann.csv)
  // *** omit Malaysian and Sri Lankan ***
