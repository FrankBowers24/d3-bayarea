var lineReader = require('line-reader');
var fs = require('fs');
var files = fs.readdirSync('.');

var aptRefs = ["studio", "one bedroom", "two bedroom", "three bedroom"];
var rentObj = {};
var fileCount = 0;

function getRentData(filename) {
  var zip;
  var inRentData = false;
  var buffer = "";
  var index = -1;
  var values = [];
  lineReader.eachLine(filename, function(line, last) {

    if (line.match(/Average Rental Rates in Zip Code/)) {
      zip = line.match(/[0-9]{5}/g)[0];
      // console.log('file: ', filename, 'zip: ', zip);
      inRentData = true;
    }
    if (inRentData) {
      if (line.match(/<\/p/)) {
        inRentData = false;
        for (var i = 0; i < aptRefs.length; i++) {
          index = buffer.search(new RegExp(aptRefs[i], 'i'));
          if (index >= 0) {
            values[i] = +buffer.slice(index).match(/\d{0,1},[0-9]{3}/)[0].replace(',', '');
          }
        }
      } else {
        buffer += line;
      }
    }

    if (line.match(/avg_graph_url/)) {
    	values[aptRefs.length] = line.match(/(src=\")([^\"]*\")/)[2].slice(0, -1);
    }

    if (last) {
    	rentObj[zip] = values;
      // console.log('prices: ', values);
      if (--fileCount === 0) {
      	 console.log('count: ', Object.keys(rentObj).length);
      	fs.appendFile('rent.json', JSON.stringify(rentObj, null, '\t'), function (err) {
          if (err) throw err;
          });
      }
    }
  });

}

for (var i in files) {

  if (files[i].match(/.zip/)) {
    getRentData(files[i]);
    fileCount++;
  }
}

