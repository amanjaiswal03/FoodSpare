var app_fireBase = {};

(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD5arRx3-My3HSm6KlrjxU1moYTbjMZDoE",
    authDomain: "foodspare-44d48.firebaseapp.com",
    databaseURL: "https://foodspare-44d48.firebaseio.com",
    projectId: "foodspare-44d48",
    storageBucket: "foodspare-44d48.appspot.com",
    messagingSenderId: "1077704831071"
  };
  firebase.initializeApp(config);

  app_fireBase = firebase;
})()