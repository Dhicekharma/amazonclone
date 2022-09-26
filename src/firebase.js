import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCtMSQmgpCJ4hTVAacVNdcd4qwBT52-x-Y",
    authDomain: "clone-703d5.firebaseapp.com",
    projectId: "clone-703d5",
    storageBucket: "clone-703d5.appspot.com",
    messagingSenderId: "202936493947",
    appId: "1:202936493947:web:0d976735110f6ae8f3bfde"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};