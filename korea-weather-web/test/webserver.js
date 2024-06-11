const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello Server!');
}).listen(port, hostname);

console.log(`Server running at http://${hostname} : ${port}`);