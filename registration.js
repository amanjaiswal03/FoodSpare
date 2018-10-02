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

//Reference user data collection

var dataRef = firebase.database().ref('data');

document.getElementById('signupForm').reset();
// Listen for form submit

document.getElementById('signupForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    //  Get values
    var name = getInputVal('name');
    var email = getInputVal('e-mail');
    var password = getInputVal('password');
    var organization = getInputVal('organization');
    var website = getInputVal('website');

    //authenticate with email and password 
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            window.alert("Error : " + errorCode + errorMessage);
            window.stop();
        });
    //save datas
    saveDatas(name, email, password, organization, website);   
}

// function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// save datas to firebase

function saveDatas(name, email, password, organization, website){
    var newDataRef = dataRef.push();
    newDataRef.set({
        name: name,
        email: email,
        password: password,
        organization: organization,
        website: website
    })
}
