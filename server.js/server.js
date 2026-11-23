const http = require('http');
const os = require('os');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  const body = JSON.stringify({ message: 'hello from Naijacloud', cpus: os.cpus().length, totalMemoryMB: Math.round(os.totalmem() / 1024 / 1024), time: new Date().toISOString() });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(body);
});
server.listen(port, '0.0.0.0');
