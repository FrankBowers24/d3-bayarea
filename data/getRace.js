var lineReader = require('line-reader');
var fs = require('fs');
var geom = JSON.parse(fs.readFileSync('Bay_Area.json', 'utf8'));

var raceObj = {};

var i = 0;
var numZips = geom.features.length;
console.log("numZips: " + numZips);
for ( ;i < numZips; i++) {
  //console.log(geom.features[i].properties.GEOID10); 
  raceObj[geom.features[i].properties.GEOID10] = [];
}

/*
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
*/


lineReader.eachLine('DEC_10_SF1_P9_with_ann.csv', function(line, last) {
	var parts = line.split(',');
  var zip = parts[1];
	if (zip in raceObj) {
    raceObj[zip] = [parts[3], parts[4], parts[7], parts[8], parts[9], parts[10], parts[11], parts[12], parts[13]];


		//console.log("IRS: " + JSON.stringify(raceObj[parts[0]], null, '\t'));

	}
    //console.log(line);

  
  if(last){
  	fs.appendFile('race.json', JSON.stringify(raceObj, null, '\t'), function (err) {
          if (err) throw err;
          });
  }
});


