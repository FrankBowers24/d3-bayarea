var lineReader = require('line-reader');
var fs = require('fs');
var geom = JSON.parse(fs.readFileSync('Bay_Area.json', 'utf8'));
var condoObj = {};
var i = 0;
var numZips = geom.features.length;
console.log("numZips: " + numZips);
for ( ;i < numZips; i++) {
  condoObj[geom.features[i].properties.GEOID10] = [];
}

lineReader.eachLine('Zip_Zhvi_Condominum.csv', function(line, last) {
	var parts = line.split(',');
  var zip = parts[0];
	if (zip in condoObj) {
    condoObj[zip] = [parts[5].replace(/\r/,'')];
	}
  
  if(last){
  	fs.appendFile('condo.json', JSON.stringify(condoObj, null, '\t'), function (err) {
          if (err) throw err;
          });
  }
});


