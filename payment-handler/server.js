const express = require('express');
const app = express();
const port = 8001;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log(`Payment handler listening on port ${port}.`);
});
