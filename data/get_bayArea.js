var lineReader = require('line-reader');
var fs = require('fs');

lineReader.eachLine('tl_2014_us_county.json', function(line, last) {
	if (line.match(/-122.[0-9]*,37./)) {
		console.log(line);


		fs.appendFile('counties.json', line + '\n', function (err) {
          if (err) throw err;
          });
	}
  
  // do whatever you want with line...
  if(last){
    // or check if it's the last one
  }
});