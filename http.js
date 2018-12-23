const server = require('http').createServer();

server.on('request', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.write('Hello world\n');
  //   res.end('Bye!\n');

  setTimeout(function() {
    res.write('Another Hello world\n');
  }, 1000);

  setTimeout(function() {
    res.write('Yet another Hello world\n');
  }, 2000);
});
server.timeout = 2500;
server.listen(8000);
