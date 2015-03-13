var lineReader = require('line-reader');
var fs = require('fs');
var geom = JSON.parse(fs.readFileSync('Bay_Area.json', 'utf8'));
var housingUnitsObj = {};
var i = 0;
var numZips = geom.features.length;
console.log("numZips: " + numZips);
for ( ;i < numZips; i++) {
  housingUnitsObj[geom.features[i].properties.GEOID10] = [];
}

/*ACS_13_5YR_DP04
1   Zip Code (zip code in second column)

Housing (Units in Structure)

23 Total Housing Units
27 1-unit, detached
31 1-unit, attached
35 2 units
39 3 to 4 units
43 5 to 9 units
47 10 to 19 units
51 20 or more units
55 Mobile Home
59 Boat, RV, Van, etc.
*/

lineReader.eachLine('ACS_13_5YR_DP04_with_ann.csv', function(line, last) {
	var parts = line.split(',');
  var zip = parts[1];
	if (zip in housingUnitsObj) {
    housingUnitsObj[zip] = [parts[23], parts[27], parts[31], parts[35], parts[39],
     parts[43], parts[47], parts[51], parts[55], parts[59]];
	}
  
  if(last){
  	fs.appendFile('housingUnits.json', JSON.stringify(housingUnitsObj, null, '\t'), function (err) {
          if (err) throw err;
          });
  }
});


