const firebaseConfig = {
    apiKey: "AIzaSyCi9N6QpMZ2deVgVYlpj6_n1XKyC59yQtc",
    authDomain: "kwitter-c2669.firebaseapp.com",
    databaseURL: "https://kwitter-c2669-default-rtdb.firebaseio.com",
    projectId: "kwitter-c2669",
    storageBucket: "kwitter-c2669.appspot.com",
    messagingSenderId: "253920260879",
    appId: "1:253920260879:web:7fe3d28a0ea6874aaa047a",
    measurementId: "G-V9JNM38QXR"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome "+ user_name + "!!!";

function add_room(){
      room_name = document.getElementById('room_name').value;
      firebase.database().ref("/").child(room_name).update
      ({
            purpose:"add_room"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - "+ room_name);
   row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name){
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function log_out(){
    localStorage.removeItem('user_name');
    localStorage.removeItem("room_name");
    window.location= "index.html";
}