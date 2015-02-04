var lineReader = require('line-reader');
var fs = require('fs');
var geom = JSON.parse(fs.readFileSync('Bay_Area.json', 'utf8'));

var irsObj = {};

var i = 0;
var numZips = geom.features.length;
console.log("numZips: " + numZips);
for ( ;i < numZips; i++) {
  //console.log(geom.features[i].properties.GEOID10); 
  irsObj[geom.features[i].properties.GEOID10] = [];
  //getCity(geom.features[i].properties);
}


lineReader.eachLine('12zp05ca - Sheet1.tsv', function(line, last) {
	var parts = line.split('\t');
	//console.log(parts[0] + ", length: " + parts[0].length);
	if (parts[0] in irsObj) {
		//console.log('FOUND: ' + parts[0] + ":" + parts[2]);
		irsObj[parts[0]].push(parts[2].replace(',', '').replace("**", "0"));

		//console.log("IRS: " + JSON.stringify(irsObj[parts[0]], null, '\t'));

	}
    //console.log(line);

  
  // do whatever you want with line...
  if(last){
  	fs.appendFile('irs.json', JSON.stringify(irsObj, null, '\t'), function (err) {
          if (err) throw err;
          });
    // or check if it's the last one
  }
});


