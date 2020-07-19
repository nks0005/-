var fs = require('fs');


//readFileSync
console.log('A');
var result = fs.readFileSync('sync/sample.txt', 'utf8');
console.log(result);
console.log('C');


//reafileAsync
console.log('A');
fs.readFile('sync/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');
