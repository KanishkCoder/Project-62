import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCYic4gViBQStbXQKMZrhQXcb6gRGd-e4M",
  authDomain: "pro-60-ae26f.firebaseapp.com",
  databaseURL: "https://pro-60-ae26f-default-rtdb.firebaseio.com",
  projectId: "pro-60-ae26f",
  storageBucket: "pro-60-ae26f.appspot.com",
  messagingSenderId: "866281819633",
  appId: "1:866281819633:web:420942970768ad442f8850"
};


// Initialize Firebase
let app =   firebase.initializeApp(firebaseConfig);
export default app.database();
