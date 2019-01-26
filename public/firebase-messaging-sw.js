// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js");
firebase.initializeApp({ messagingSenderId: "331864450031" });
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(payload => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body."
    // icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
