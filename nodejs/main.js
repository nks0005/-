var http = require('http');
var fs = require('fs');
var url = require('url');


var app = http.createServer(function(request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  var title = queryData.id;



  if (pathname === '/') {
    if (queryData.id === undefined) {


      fs.readdir('./data', function(err, filelist) {
        var title = 'Welcome';
        var description = 'Hello, Node.js';

        console.log(filelist);
        /*var list =
        `<ul>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>`;*/

        var list = '<ul>';
        for (var i = 0; i < filelist.length; i++) {
          list += '<li><a href="/?id=' + filelist[i] + '">' + filelist[i] + '</a></li>';
        }
        list += '</ul>';


        var template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
      </html>
      `;
        response.writeHead(200);
        response.end(template);
      });


    } else {
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description) {
        fs.readdir('./data', function(err, filelist) {

          /*var list =
          `<ul>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ul>`;*/

          console.log(filelist);
          var list = '<ul>';
          for (var i = 0; i < filelist.length; i++) {
            list += '<li><a href="/?id=' + filelist[i] + '">' + filelist[i] + '</a></li>';
          }
          list += '</ul>';



          var template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
      </html>
      `;
          response.writeHead(200);
          response.end(template);
        });
      });
    }
  } else {
    response.writeHead(404);
    response.end('Not found');
  }


});
app.listen(80);
