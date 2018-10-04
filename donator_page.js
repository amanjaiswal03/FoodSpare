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
          personal += 'User: ' + firebaseUser.email;
      }
      $('#personal-details').append(personal);
  })
  

var database = firebase.database().ref("inventory").orderByKey();
database.once("value").then(function(snapshot){
    if(snapshot.exists()){
        var content = '';
        snapshot.forEach(function(data){
            var val = data.val();
            content += '<table>'
            content += '<th> Donator E-mail </th>'  
            content += '<th> Attribute of Food </th>';
            content += '<th> Pick up date </th>';
            content += '<th> Pick up time </th>';
            content += '<th> Portion </th>'
            content += '<th> Pick up place </th>'
            content += '<th rowspan = 2> <button> Add to basket </button> </th>'
            content +='<tr>'; 
            content += '<td>' + val.email + '  </td>';
            content += '<td>' + val.foodClass + '  </td>';
            content += '<td>' + val.pickupDate + '  </td>';
            content += '<td>' + val.pickupTime+ '  </td>';
            content += '<td>' + val.portion + '  </td>';
            content += '<td>' + val.location + '  </td>';
            content += '</tr>';
            content += '</table>'
        });
        $('#inventory-table').append(content);      
    }
});