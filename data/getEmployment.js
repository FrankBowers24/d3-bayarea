var lineReader = require('line-reader');
var fs = require('fs');
var geom = JSON.parse(fs.readFileSync('Bay_Area.json', 'utf8'));
var employmentObj = {};
var i = 0;
var numZips = geom.features.length;
console.log("numZips: " + numZips);
for ( ;i < numZips; i++) {
  employmentObj[geom.features[i].properties.GEOID10] = [];
}

lineReader.eachLine('ACS_13_5YR_DP03_with_ann.csv', function(line, last) {
	var parts = line.split(',');
  var zip = parts[1];
	if (zip in employmentObj) {
    employmentObj[zip] = [parts[19]/parts[11]];
	}
  
  if(last){
  	fs.appendFile('employment.json', JSON.stringify(employmentObj, null, '\t'), function (err) {
          if (err) throw err;
          });
  }
});


