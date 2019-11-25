
var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request received: " + pathname);

    route(handle, pathname, response);
  }

  http.createServer(onRequest).listen(8080);
  console.log("Server started.");
}

exports.start = start;

// http.createServer((req, res) => {
//   var pathname = url.parse(req.url).pathname;
//   res.writeHead(200, {'Content-type': 'text/plain; charset=utf-8'});
//   res.write(data);
//   res.end();
// }).listen(8080, '127.0.0.1');

