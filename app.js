const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.headers, req.method, req.url);

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first Page</title></head>');
  res.write('<body><h1>Hello form Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
})

server.listen(3000);