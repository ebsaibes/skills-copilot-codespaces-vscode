// Create web server
// Create comments.js file and add the following code:

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('comments.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

// This code will create a server that listens to port 8080. When the server receives a request, it reads the comments.html file and returns it as a response.