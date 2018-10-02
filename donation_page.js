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

var inventoryRef = firebase.database().ref('inventory');

document.getElementById('inventory').reset();
// Listen for form submit

document.getElementById('inventory').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    //  Get values
    var foodClass = getInputVal('foodClass');
    var portion = getInputVal('portion');
    var pickupDate = getInputVal('date');
    var pickupTime = getInputVal('time');

    //save datas
    saveDatas(foodClass, portion, pickupDate, pickupTime);   
}

// function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// save datas to firebase

function saveDatas(foodClass, portion, pickupDate, pickupTime){
    var newInventoryRef = inventoryRef.push();
    newInventoryRef.set({
        foodClass: foodClass,
        portion: portion,
        pickupDate: pickupDate,
        pickupTime: pickupTime
    })
}