let request;

async function initPaymentRequest() {
  const output = document.getElementById('output');
  try {
    if (!window.PaymentRequest) {
      output.innerHTML = 'PaymentRequest API is not available';
      return;
    }
    request = new PaymentRequest([{supportedMethods: 'http://localhost:8001/pay'}], {total: {label: 'Total', amount: {value: '0.01', currency: 'USD'}}});
    let canMakePayment;
    let hasEnrolledInstrument;
    if (request.canMakePayment) {
      canMakePayment = await request.canMakePayment();
    }
    if (request.hasEnrolledInstrument) {
      hasEnrolledInstrument = await request.hasEnrolledInstrument();
    }
    if (canMakePayment && hasEnrolledInstrument) {
      output.innerHTML = 'Can make payment and have enrolled instrument';
    } else if (canMakePayment) {
      output.innerHTML = 'Can make payment, but no enrolled instrument';
    } else {
      output.innerHTML = 'Cannot make payment. Is the payment handler server started?';
    }
  } catch (e) {
    output.innerHTML = e.toString();
  }
}

initPaymentRequest();

async function launchPaymentFlow() {
  const output = document.getElementById('output');
  try {
    let response = await request.show();
    await response.complete('success');
    output.innerHTML = JSON.stringify(response, undefined, 2);
  } catch (e) {
    output.innerHTML = e.toString();
  }
}
