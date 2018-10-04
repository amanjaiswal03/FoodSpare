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

// sign-out user
   document.getElementById('logout').addEventListener('click', e => {
    firebase.auth().signOut();
    window.location = "login.html";
});

// retrieving user details 

var personal = '';

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser){
        console.log(firebaseUser);
        personal += '<div> User: ' + '<span id = email>' + firebaseUser.email + '</span></div>';
    }
    $('#personal-details').append(personal);
})
//Reference user data collection

var inventoryRef = firebase.database().ref('inventory');

document.getElementById('inventory').reset();
// Listen for form submit

document.getElementById('inventory').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    //  Get values
    var form = document.getElementById('inventory');
    var foodClass = getInputVal('foodClass');
    var portion = getInputVal('portion');
    var pickupDate = getInputVal('date');
    var pickupTime = getInputVal('time');
    var location = getInputVal('location');
    var email = document.getElementById('email').innerHTML;
    //save datas
    saveDatas(foodClass, portion, pickupDate, pickupTime, location, email);
    window.alert("Thank you for donating!! You make this world a better place!");
    form.reset();

}

// function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// save datas to firebase

function saveDatas(foodClass, portion, pickupDate, pickupTime, location, email){
    var newInventoryRef = inventoryRef.push();
    newInventoryRef.set({
        foodClass: foodClass,
        portion: portion,
        pickupDate: pickupDate,
        pickupTime: pickupTime,
        location: location,
        email: email
    })
}