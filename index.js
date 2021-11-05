const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;


const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello, World\nfrom conference\nHello from B-Team');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
