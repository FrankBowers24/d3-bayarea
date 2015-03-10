var lineReader = require('line-reader');
var fs = require('fs');
var geom = JSON.parse(fs.readFileSync('Bay_Area.json', 'utf8'));

var birthObj = {};

var i = 0;
var numZips = geom.features.length;
console.log("numZips: " + numZips);
for ( ;i < numZips; i++) {
  //console.log(geom.features[i].properties.GEOID10); 
  birthObj[geom.features[i].properties.GEOID10] = [];
}

/*
1,  GEO.id2,Id2
Place of Birth
343 PLACE OF BIRTH - Total population
355 Native - California
359 Native - USA, not California
367 Foreign Born

*/


lineReader.eachLine('ACS_13_5YR_DP02.csv', function(line, last) {
	var parts = line.split(',');
  var zip = parts[1];
	if (zip in birthObj) {
    birthObj[zip] = [parts[343], parts[355], parts[359], parts[367]];


		//console.log("IRS: " + JSON.stringify(birthObj[parts[0]], null, '\t'));

	}
    //console.log(line);

  
  if(last){
  	fs.appendFile('birth.json', JSON.stringify(birthObj, null, '\t'), function (err) {
          if (err) throw err;
          });
  }
});


