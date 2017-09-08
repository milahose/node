var http = require('http');
var fs = require('fs');
var html;

http.createServer((req, res) => {

  if (req.url === '/') {
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    var obj = {
      firstName: 'Jane', 
      lastName: 'Doe'
    };

    res.end(JSON.stringify(obj));
  } else {
    res.writeHead(404);
  res.end();
  }

}).listen(3000);