const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

http.createServer(app).listen(3000, () => {
  console.log('Server started on port 3000');
});
