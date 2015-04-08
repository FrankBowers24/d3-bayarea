var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('Bay_Area.json', 'utf8'));


fs.writeFileSync('Bay_Area_Cities.json', JSON.stringify(obj));

//console.log("JSON: " + JSON.stringify(obj, null, "\t"));