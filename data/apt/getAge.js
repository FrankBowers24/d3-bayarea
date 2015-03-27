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



/*
lineReader.eachLine('ACS_13_5YR_S0101_with_ann.csv', function(line, last) {
	var parts = line.split(',');
  var zip = parts[1];
  var under18 = +parts[9] + +parts[117] + +parts[123];
  var college = +parts[129];
  var to35 = +parts[39] + +parts[45];
  var to45 = +parts[51] + +parts[57];
  var to65 = +parts[63] + +parts[69] + +parts[75] + +parts[81];
  var over65 = +parts[165];
  var ages = [0, under18, college, to35, to45, to65, over65];
  var sum = ages.reduce(function(p, c) { return p + c; });
  ages[0] = sum;
  ages = ages.map(function(n){ return n.toFixed(1); });
	if (zip in ageObj) {
    ageObj[zip] = ages;


		//console.log("IRS: " + JSON.stringify(ageObj[parts[0]], null, '\t'));

	}*/

  
 /* if(last){
  	fs.appendFile('age.json', JSON.stringify(ageObj, null, '\t'), function (err) {
          if (err) throw err;
          });
  }
});*/


