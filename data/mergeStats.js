var lineReader = require('line-reader');
var fs = require('fs');
var race = JSON.parse(fs.readFileSync('race.json', 'utf8'));
var asian = JSON.parse(fs.readFileSync('asian.json', 'utf8'));
var irs = JSON.parse(fs.readFileSync('irs.json', 'utf8'));
var birth = JSON.parse(fs.readFileSync('birth.json', 'utf8'));
var foreign = JSON.parse(fs.readFileSync('foreign.json', 'utf8'));
var age = JSON.parse(fs.readFileSync('age.json', 'utf8'));
var sfr = JSON.parse(fs.readFileSync('sfr.json', 'utf8'));
var condo = JSON.parse(fs.readFileSync('condo.json', 'utf8'));
var ownRent = JSON.parse(fs.readFileSync('ownRent.json', 'utf8'));
var housingUnits = JSON.parse(fs.readFileSync('housingUnits.json', 'utf8'));
var rent = JSON.parse(fs.readFileSync('rent.json', 'utf8'));

var mergedTotal = {};

var count = 0;
for (var key in irs) {
  count++;
  console.log(key);
  var merged = {
    income: irs[key],
    race: race[key],
    asian: asian[key],
    birth: birth[key],
    foreign: foreign[key],
    age: age[key],
    sfr: sfr[key],
    condo: condo[key],
    ownRent: ownRent[key],
    housingUnits: housingUnits[key],
    rent: rent[key]
  }
  mergedTotal[key] = merged;
}
console.log(count + ' zip codes.');

fs.appendFile('allStats.json', JSON.stringify(mergedTotal, null, '\t'), function (err) {
  if (err) throw err;
});


