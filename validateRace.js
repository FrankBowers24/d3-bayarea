var lineReader = require('line-reader');
var fs = require('fs');
var raceStats = JSON.parse(fs.readFileSync('race.json', 'utf8'));

var zipCount, zip, array, total, sum;

zipCount = 0;
for (zip in raceStats) {
  array = raceStats[zip];
  total = +array[0];
  sum = array.slice(1).reduce(function(prev, curr) {
    return +prev + (+curr);
  });
  console.log("Zip: " + zip + ", Total Population: " + total + ", sum: " + sum + ", matched: " + (total === sum));
  zipCount++;

}

console.log("Total zip codes: " + zipCount);



