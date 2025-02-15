const port = 8001;

self.addEventListener('canmakepayment', function(evt) {
  evt.respondWith(true);
});

var resolverFunction;

self.addEventListener('paymentrequest', function(evt) {
  evt.respondWith(new Promise(function(resolve, reject) {
    resolverFunction = resolve;
    evt.openWindow(`http://localhost:${port}/pay/pay-flow.html`);
  }));
});

self.addEventListener('message', function(evt) {
  if (resolverFunction) {
    resolverFunction({methodName: `http://localhost:${port}/pay`, details: {key: 'value'}});
    resolverFunction = null;
  }
});
