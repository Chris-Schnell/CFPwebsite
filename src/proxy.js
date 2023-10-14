const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({
  secure: false,  // Ignore SSL certificate errors
});

const express = require('express');
const app = express();

// CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*"); // Replace with your frontend's URL
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const server = http.createServer((req, res) => {
  // Forward the request to the target server (in this example, 'https://jsonplaceholder.typicode.com/')
  proxy.web(req, res, { target: 'https://jsonplaceholder.typicode.com/' }); // Replace with your target URL
});

server.listen(3001, () => {
  console.log('Proxy server is listening on port 3001');
});
