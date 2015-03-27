var lineReader = require('line-reader');
var fs = require('fs');
var geom = JSON.parse(fs.readFileSync('Bay_Area.json', 'utf8'));

var ageObj = {};

var i = 0;
var numZips = geom.features.length;
console.log("numZips: " + numZips);
for ( ;i < numZips; i++) {
  var zip = geom.features[i].properties.GEOID10;
  //console.log(geom.features[i].properties.GEOID10);
  console.log('curl http://www.myapartmentmap.com/data/zip_code/' + zip + '/ >> ' + zip + '.zip'); 
  ageObj[geom.features[i].properties.GEOID10] = [];
}



