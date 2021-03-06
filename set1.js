// This js file fetches data in set1 table from firebase database and appends to the table created in set1.html
// set1 table contains the details of tournaments played from 1986-1990
// Firebase URL: https://firebase-project-name.firebaseio.com
// References: https://stackoverflow.com/questions/48312173/display-data-from-firebase-to-html-table?rq=1
//             http://mariechatfield.com/tutorials/firebase/step5.html
//             https://stackoverflow.com/questions/44452392/show-firebase-data-in-a-html-table-with-javascript  


// configuration settings used from firebase. Reference: https://firebase.google.com/docs/web/setup?authuser=0
var config = {
    apiKey: "AIzaSyBaBEb7Ns4wLwjSF7RVXmAaDU-iRcN7f2c",
    authDomain: "firebase-project-id.firebaseapp.com",
    databaseURL: "https://firebase-project-id.firebaseio.com",
    projectId: "firebase-project-id",
    storageBucket: "firebase-project-id.appspot.com",
    messagingSenderId: "33667015252"
  };

// Initializing Firebase app
firebase.initializeApp(config);

var userDataRef = firebase.database().ref('/set1/').once("value").then(function(snapshot) {
   console.log(snapshot.val());0
   var content = '';
    snapshot.forEach(function(data) {
           var year = data.val().year;
            var tournament = data.val().tournament;
	          var position = data.val().position;
	          var content = '';
            content += '<tr>';
            content += '<td>' + year + '</td>';
            content += '<td>' + tournament + '</td>';
	          content += '<td>' + position + '</td>';
            content += '</tr>';
            $('#ex-table tbody').append(content);
      });
});
