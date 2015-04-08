//http://ziptasticapi.com/94010
var http = require('http');
var fs = require('fs');
var geom = JSON.parse(fs.readFileSync('Bay_Area.json', 'utf8'));

var options = {
  host: 'ziptasticapi.com',
  port: 80,
  path: '/95032'
};


var i = 0;
var numZips = geom.features.length;
var numCities = 0;
console.log("numZips: " + numZips);
for (; i < numZips; i++) {
  console.log(geom.features[i].properties.GEOID10);
  getCity(geom.features[i].properties);
}


function capitalizeCity(city) {
  var parts = city.split(' ');
  for (var i = 0; i < parts.length; i++) {
    parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1).toLowerCase();
  }
  return parts.join(' ');
}


function getCity(properties) {
  options.path = '/' + properties.GEOID10;

  http.get(options, function(res) {
    console.log("Got response: " + res.statusCode);

    res.setEncoding('utf8');
    res.on('data', function(data) {
      var jsonObject = JSON.parse(data);
      if (jsonObject.city) {
        console.log("zip: " + properties.GEOID10 + ", City: " + capitalizeCity(jsonObject.city));
        properties.city = capitalizeCity(jsonObject.city);
        console.log("NumCities: " + numCities + ", numZips: " + numZips);
        if (++numCities == numZips) {
          fs.writeFileSync('Bay_Area_Cities.json', JSON.stringify(geom));
          console.log('wrote file');
        }
      }


    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });

}

//console.log("getCity: " + getCity("94930"));