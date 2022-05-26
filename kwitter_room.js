const firebaseConfig = {
      apiKey: "AIzaSyB9iLIN9lbMOgq2W-s3MQv3YP2_62O4Eh4",
      authDomain: "kwitter-4026a.firebaseapp.com",
      databaseURL: "https://kwitter-4026a-default-rtdb.firebaseio.com",
      projectId: "kwitter-4026a",
      storageBucket: "kwitter-4026a.appspot.com",
      messagingSenderId: "74924935986",
      appId: "1:74924935986:web:fe187f53dfa4dbab43652b"
    };
    
    firebase.initializeApp(firebaseConfig);

    var user_name = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"Adding Room Name"
          })
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name : " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
                       

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log("name")
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}


