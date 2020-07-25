import firebase from "firebase/app";

const firebaseconfig = {
  apiKey: "AIzaSyBRtbX8CTL3dB_w8no1qXrCMWe5yOVtq50",
  authDomain: "apprestaurantes-5795a.firebaseapp.com",
  databaseURL: "https://apprestaurantes-5795a.firebaseio.com",
  projectId: "apprestaurantes-5795a",
  storageBucket: "apprestaurantes-5795a.appspot.com",
  messagingSenderId: "379723787060",
  appId: "1:379723787060:web:242b05239b16cf31a5d361",
};

export const firebaseApp = firebase.initializeApp(firebaseconfig);

/* <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBRtbX8CTL3dB_w8no1qXrCMWe5yOVtq50",
    authDomain: "apprestaurantes-5795a.firebaseapp.com",
    databaseURL: "https://apprestaurantes-5795a.firebaseio.com",
    projectId: "apprestaurantes-5795a",
    storageBucket: "apprestaurantes-5795a.appspot.com",
    messagingSenderId: "379723787060",
    appId: "1:379723787060:web:242b05239b16cf31a5d361"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script> */
