const express = require('express');
const proxy = require('http-proxy');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 13666;
const apiProxy = proxy.createProxyServer();
const serverOne = 'http://localhost:3001',
  serverTwo = 'http://localhost:4007',
  serverThree = 'http://localhost:3007',
  serverFour = 'http://localhost:3002';

app.use(cors());

// app.get('/', (req, res) => (
//   res.send('Hello World!'))
// );

app.use('/:id', express.static('public'));

app.all('/description/*', (req, res) => {
  console.log('Server 1');
  apiProxy.web(req, res, {target: serverOne});
});

app.all('/reviews/*', (req, res) => {
  console.log('Server 2');
  apiProxy.web(req, res, {target: serverTwo});
});

app.all('/reservation/*', (req, res) => {
  console.log('Server 3');
  apiProxy.web(req, res, {target: serverThree});
});

app.all('/photos/*', (req, res) => {
  console.log('Server 4');
  apiProxy.web(req, res, {target: serverFour});
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));