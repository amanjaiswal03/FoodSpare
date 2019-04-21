//Initialize Firebase
var config = {
  apiKey: "AIzaSyD5arRx3-My3HSm6KlrjxU1moYTbjMZDoE",
  authDomain: "foodspare-44d48.firebaseapp.com",
  databaseURL: "https://foodspare-44d48.firebaseio.com",
  projectId: "foodspare-44d48",
  storageBucket: "foodspare-44d48.appspot.com",
  messagingSenderId: "1077704831071"
};
firebase.initializeApp(config);


var dataRef = firebase.database().ref('data');

// Listen for form submit

document.getElementById('sign-in').addEventListener('click', signIn);

function signIn(){

    //  Get values
    var email = getInputVal('e-mail');
    var password = getInputVal('password');
    

   // authenticate with email and password 
    firebase.auth().signInWithEmailAndPassword(email, password).then(
        function(){
             window.location = "donator_page.html";     
        }
    ).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error : " +  errorMessage);
        window.reset;
    });

}

// function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

