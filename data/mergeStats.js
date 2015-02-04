var lineReader = require('line-reader');
var fs = require('fs');
var race = JSON.parse(fs.readFileSync('race.json', 'utf8'));
var asian = JSON.parse(fs.readFileSync('asian.json', 'utf8'));
var irs = JSON.parse(fs.readFileSync('irs.json', 'utf8'));

var mergedTotal = {};

var count = 0;
for (key in irs) {
  count++;
  console.log(key);
  var merged = {
    income: irs[key],
    race: race[key],
    asian: asian[key]
  }
  mergedTotal[key] = merged;
}
console.log(count + ' zip codes.');

fs.appendFile('allStats.json', JSON.stringify(mergedTotal, null, '\t'), function (err) {
  if (err) throw err;
});


