var lineReader = require('line-reader');
var fs = require('fs');
var geom = JSON.parse(fs.readFileSync('Bay_Area.json', 'utf8'));

var asianObj = {};

var i = 0;
var numZips = geom.features.length;
console.log("numZips: " + numZips);
for ( ;i < numZips; i++) {
  //console.log(geom.features[i].properties.GEOID10); 
  asianObj[geom.features[i].properties.GEOID10] = [];
}

/*
1,  GEO.id2,Id2
3,  HD01_VD01,Estimate; Total:
5,  HD01_VD02,Estimate; Total: - Asian Indian
7,  HD01_VD03,Estimate; Total: - Bangladeshi
9,  HD01_VD04,Estimate; Total: - Cambodian
11, HD01_VD05,"Estimate; Total: - Chinese , except Taiwanese"
13, HD01_VD06,Estimate; Total: - Filipino
15, HD01_VD07,Estimate; Total: - Hmong
19, HD01_VD09,Estimate; Total: - Japanese
21, HD01_VD10,Estimate; Total: - Korean
23, HD01_VD11,Estimate; Total: - Laotian
27, HD01_VD13,Estimate; Total: - Pakistani
31, HD01_VD15,Estimate; Total: - Taiwanese
33, HD01_VD16,Estimate; Total: - Thai
35, HD01_VD17,Estimate; Total: - Vietnamese

*/


lineReader.eachLine('ACS_13_5YR_B02006_with_ann.csv', function(line, last) {
	var parts = line.split(',');
  var zip = parts[1];
	if (zip in asianObj) {
    asianObj[zip] = [parts[3], parts[5], parts[7], parts[9], parts[11], parts[13], parts[15], parts[19], parts[21], parts[23], parts[27], parts[31], parts[33], parts[35]];


		//console.log("IRS: " + JSON.stringify(asianObj[parts[0]], null, '\t'));

	}
    //console.log(line);

  
  if(last){
  	fs.appendFile('asian.json', JSON.stringify(asianObj, null, '\t'), function (err) {
          if (err) throw err;
          });
  }
});


