var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '111111',
  database: 'opentutorials'
});

connection.connect();

connection.query('Select * FROM topic', function (error, results, fields) {
  if (error) {
    throw error;
  }
  console.log('The solution is: ', results);
});

connection.end();