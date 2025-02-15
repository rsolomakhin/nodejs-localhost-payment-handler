function onClick() {
  if (navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage) {
    navigator.serviceWorker.controller.postMessage('confirm');
  }
}
