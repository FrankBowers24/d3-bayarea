var lineReader = require('line-reader');
var fs = require('fs');
var geom = JSON.parse(fs.readFileSync('Bay_Area.json', 'utf8'));

var ageObj = {};

var i = 0;
var numZips = geom.features.length;
console.log("numZips: " + numZips);
for ( ;i < numZips; i++) {
  //console.log(geom.features[i].properties.GEOID10); 
  ageObj[geom.features[i].properties.GEOID10] = [];
}

/*
1,  GEO.id2,Id2
AGE
GE
4  Total Population
10 Total < 5
118 Total 5 - 14
124 Total 15 - 17

130 Total 18 - 24


40 Total 25-29
46 Total 30-34

52 Total 35 - 39
58 Total 40 - 44

64 Total 45 - 49
70 Total 50 - 54
76 Total 55 - 59
82 Total 60 - 64

166 Total 65 and over

*/


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

	}

  
  if(last){
  	fs.appendFile('age.json', JSON.stringify(ageObj, null, '\t'), function (err) {
          if (err) throw err;
          });
  }
});


