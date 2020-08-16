var http = require('http');
var cookie = require('cookie');

http.createServer(function (request, response) {

    // npm install cookie를 통해 모듈을 사용하자.
    console.log(request.headers.cookie);
    var cookies = {};
    if (request.headers.cookie !== undefined) {

        cookies = cookie.parse(request.headers.cookie);
        console.log(cookies.yummy_cookie);


    }
    response.writeHead(200, { 'Set-Cookie':
    [
        'yummy_cookie=choco',
        'tasty_cookie=strawberry',
        `Permanent=cookies; Max-age=${60*60*24*30}`,
        `secure=secure; Secure`,
        `httponly=httponly; HttpOnly`,
        `path=path; path=/cookie`,
        `Domain=Domain; Domain=o2.org`
    ]});
    response.end(`Cookie!!`);
}).listen(3000);