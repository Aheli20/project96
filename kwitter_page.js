const firebaseConfig = {
    apiKey: "AIzaSyCi9N6QpMZ2deVgVYlpj6_n1XKyC59yQtc",
    authDomain: "kwitter-c2669.firebaseapp.com",
    databaseURL: "https://kwitter-c2669-default-rtdb.firebaseio.com",
    projectId: "kwitter-c2669",
    storageBucket: "kwitter-c2669.appspot.com",
    messagingSenderId: "253920260879",
    appId: "1:253920260879:web:e6fc67befc20490daa047a",
    measurementId: "G-9TQS905JLB"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);     
  
  user_name = localStorage.getItem("user_name"); 
  room_name = localStorage.getItem("room_name");

  function send() {
      message = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: message,
            like: 0
      });
      document.getElementById("message").value = "";
  }
function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code
                      console.log(firebase_message_id);
                      console.log(message_data);
                      names = message_data["name"];
                      message = message_data["message"];
                      like = message_data["like"];

                      v1 = "<h4>" + names + "<img class='user_tick' src='tick.png' >  </h4>";
                      v2 = "<h4 class='message_h4'> " + message + "</h4>";
                      v3 = "<button class='btn btn-warning' id= " + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                      v4 = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                      row = v1 + v2 + v3 + v4;
                      document.getElementById("output").innerHTML += row;

                      //End code
                }
          });
    });
}
getData();

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");



function log_out() {
    localStorage.removeItem('user_name');
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function updateLike(message_id){
    v5 = message_id;
    likes = document.getElementById(v5).value;
    updated_likes= Number(likes) + 1;

    firebase.database().ref(room_name).child(message_id).update({
          like: updated_likes
    });
}