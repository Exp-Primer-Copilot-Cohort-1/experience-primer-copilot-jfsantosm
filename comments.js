// Create web server application
// Run: node comments.js
// URL: http://localhost:8081
// URL: http://localhost:8081/comments

// Import modules
var http = require('http');
var fs = require('fs');

// Create server
http.createServer(function (request, response) {
    // Set the response HTTP header with HTTP status and Content type
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body "Hello World"
    response.end('Hello World\n');
}).listen(8081);

// Print URL for accessing server
console.log('Server running at http://

