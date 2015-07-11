var lineReader = require('line-reader');
var fs = require('fs');
var geom = JSON.parse(fs.readFileSync('Bay_Area.json', 'utf8'));

var sfrObj = {};

var i = 0;
var numZips = geom.features.length;
console.log("numZips: " + numZips);
for (; i < numZips; i++) {
  //console.log(geom.features[i].properties.GEOID10); 
  sfrObj[geom.features[i].properties.GEOID10] = [];
}




lineReader.eachLine('Zip_Zhvi_SingleFamilyResidence.csv', function(line, last) {
  var parts = line.split(',');
  var zip = parts[0];
  if (zip in sfrObj) {
    sfrObj[zip] = [parts[5].replace(/\r/, '')];



  }
  //console.log(line);


  if (last) {
    fs.appendFile('sfr.json', JSON.stringify(sfrObj, null, '\t'), function(err) {
      if (err) throw err;
    });
  }
});