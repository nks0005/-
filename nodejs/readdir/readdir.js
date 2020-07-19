var testFolder = '../';
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})
