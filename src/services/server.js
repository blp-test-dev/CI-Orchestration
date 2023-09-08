// Load the http module to create an HTTP server.
const http = require('http');

// Configure our HTTP server to respond with "Hello, Node!" to all requests.
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node!');
});

const PORT = 3000;

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});

