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

// Listen for form submit

document.getElementById('sign-up').addEventListener('click', submitForm);

function submitForm(){

    //  Get values
    var name = getInputVal('name');
    var email = getInputVal('e-mail');
    var password = getInputVal('password');
    var organization = getInputVal('organization');
    var website = getInputVal('website');
    var content = '';

   // authenticate with email and password 
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
        function(){
            window.alert("Congratulation!! you are registered!!")
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
        website: website,
    })
}
