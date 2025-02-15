self.addEventListener('canmakepayment', function(evt) {
  evt.respondWith(true);
});

var resolverFunction;

self.addEventListener('paymentrequest', function(evt) {
  evt.respondWith(new Promise(function(resolve, reject) {
    resolverFunction = resolve;
    evt.openWindow('http://localhost:8001/pay-flow.html');
  }));
});

self.addEventListener('message', function(evt) {
  if (resolverFunction) {
    resolverFunction({methodName: 'https://localhost:8001', details: {key: 'value'}});
    resolverFunction = null;
  }
});
