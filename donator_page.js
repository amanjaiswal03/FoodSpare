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

var database = firebase.database().ref("inventory").orderByKey();
database.once("value").then(function(snapshot){
    if(snapshot.exists()){
        var content = '';
        snapshot.forEach(function(data){
            var val = data.val();
            content += '<table>'  
            content += '<th> Attribute of Food </th>';
            content += '<th> Pick up time </th>';
            content += '<th> Pick up place </th>';
            content += '<th> Portion </th>'
            content += '<th rowspan = 2> <button> Add to basket </button> </th>'
            content +='<tr>'; 
            content += '<td>' + val.foodClass + '  </td>';
            content += '<td>' + val.pickupDate + '  </td>';
            content += '<td>' + val.pickupTime+ '  </td>';
            content += '<td>' + val.portion + '  </td>';
            content += '</tr>';
            content += '</table>'
            console.log(content);
        });
        $('#inventory-table').append(content);      
    }
});