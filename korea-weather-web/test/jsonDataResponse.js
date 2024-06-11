const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  const newJson = [
    {
      id: 1,
      name: 'Kang',
    },
    {
      id: 2,
      name: 'Kim',
    },
    {
      id: 3,
      name: 'Seo',
    },
  ];

  const json = JSON.stringify(newJson);

  response.end(json);
}).listen(port, hostname);

console.log(`Server running at http://${hostname} : ${port}`);
