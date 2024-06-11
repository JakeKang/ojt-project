const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const server = http.createServer((request, response) => {
  const serverUrl = url.parse(request.url).pathname;
  const filePath = path.join(`${__dirname}/public/${serverUrl}`);

  if (serverUrl === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(fs.readFileSync(`${filePath}/index.html`));
  } else if (serverUrl === '/index.css') {
    response.writeHead(200, { 'Content-Type': 'text/css' });
    response.end(fs.readFileSync(filePath));
  } else if (serverUrl === '/weather.js') {
    response.writeHead(200, { 'Content-Type': 'text/javascript' });
    response.end(fs.readFileSync(filePath));
  } else if (serverUrl === '/data') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write('<h1>데이터입니다.</h1>');
    response.end();
  } else {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write('<h1>페이지를 찾을 수 없습니다.</h1>');
    response.end();
  }
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000');
});