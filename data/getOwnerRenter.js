var lineReader = require('line-reader');
var fs = require('fs');
var geom = JSON.parse(fs.readFileSync('Bay_Area.json', 'utf8'));
var ownRentObj = {};
var i = 0;
var numZips = geom.features.length;
console.log("numZips: " + numZips);
for ( ;i < numZips; i++) {
  ownRentObj[geom.features[i].properties.GEOID10] = [];
}

/*ACS_13_5YR_DP04
2   Zip Code (zip code in second column)

175, HC01_V63 Occupied housing units
179, HC01_VC64 Occupied housing units - Owner-occupied
183, HC01_VC65 Occupied housing units - Renter-occupied
*/

lineReader.eachLine('ACS_13_5YR_DP04_with_ann.csv', function(line, last) {
	var parts = line.split(',');
  var zip = parts[1];
	if (zip in ownRentObj) {
    ownRentObj[zip] = [parts[175], parts[179], parts[183]];
	}
  
  if(last){
  	fs.appendFile('ownRent.json', JSON.stringify(ownRentObj, null, '\t'), function (err) {
          if (err) throw err;
          });
  }
});


