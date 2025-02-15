const express = require('express');
const app = express();
const port = 8001;

app.head('/pay', function (req, res) {
  res.set('Link', `<http://localhost:${port}/pay/manifest.json>; rel="payment-method-manifest"`);
  res.status(204);  // HTTP code 204 means "no content".
  res.end();
});

app.use(express.static('public'));

app.listen(port, function () {
  console.log(`Payment handler listening on port ${port}.`);
});
