var lineReader = require('line-reader');
var fs = require('fs');
var race = JSON.parse(fs.readFileSync('race.json', 'utf8'));
var rent = JSON.parse(fs.readFileSync('rent.json', 'utf8'));

var missing = {};

for (var key in race) {
	if (!rent.hasOwnProperty(key)) {
		missing[key] = true;
		console.log('curl http://www.myapartmentmap.com/data/zip_code/' + key + '/ >> ' + key + '.zip'); 
	}
}

console.log(JSON.stringify(missing, null, '\t'));
