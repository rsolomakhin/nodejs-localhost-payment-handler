const express = require('express');
const app = express();
const port = 8001;

app.head('/', function (req, res) {
  res.set('Link', '<manifest.json>; rel="payment-method-manifest"');
  res.status(204);  // No content.
});

app.use(express.static('public'));

app.listen(port, function () {
  console.log(`Payment handler listening on port ${port}.`);
});
