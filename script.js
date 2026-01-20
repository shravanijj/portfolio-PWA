// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(error => console.log('SW registration failed:', error));
}

// Simple notification (optional)
if ('Notification' in window) {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      console.log("Notification permission granted");
    }
  });
}
