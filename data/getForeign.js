var lineReader = require('line-reader');
var fs = require('fs');
var geom = JSON.parse(fs.readFileSync('Bay_Area.json', 'utf8'));

var foreignObj = {};

var i = 0;
var numZips = geom.features.length;
console.log("numZips: " + numZips);
for ( ;i < numZips; i++) {
  //console.log(geom.features[i].properties.GEOID10); 
  foreignObj[geom.features[i].properties.GEOID10] = [];
}

/*
1,  GEO.id2,Id2
411 Foreign Born
415 Foreign Born - Europe
419 Foreign Born - Asia
423 Foreign Born - Africa
427 Foreign Born - Oceania
431 Foreign Born - Latin America
435 Foreign Born - Canada
*/


lineReader.eachLine('ACS_13_5YR_DP02.csv', function(line, last) {
	var parts = line.split(',');
  var zip = parts[1];
	if (zip in foreignObj) {
    foreignObj[zip] = [parts[411], parts[415], parts[419], parts[423], parts[427], parts[431], parts[435]];

		//console.log("IRS: " + JSON.stringify(foreignObj[parts[0]], null, '\t'));

	}
    //console.log(line);

  
  if(last){
  	fs.appendFile('foreign.json', JSON.stringify(foreignObj, null, '\t'), function (err) {
          if (err) throw err;
          });
  }
});


