'use strict';



let nodeData; // object we will push to firebase
let fbData; // data we pull from firebase
let fbDataArray; // firebase data values converted to an array
let database; // reference to our firebase database
let folderName = 'messages'; // name of folder you create in db


function setup() {
  noCanvas();

  let config = {
      apiKey: "AIzaSyCAdI1AB0j68UFP3vQUibwi3_nuoHQAPPo",
      authDomain: "messageenabotto.firebaseapp.com",
      databaseURL: "https://messageenabotto.firebaseio.com",
      projectId: "messageenabotto",
      storageBucket: "messageenabotto.appspot.com",
      messagingSenderId: "1031392204995",
      appId: "1:1031392204995:web:94f2af507c7955240d2a76",
  };

  firebase.initializeApp(config);

  database = firebase.database();

  // this references the folder you want your data to appear in
let ref = database.ref(folderName);
// **** folderName must be consistant across all calls to this folder

ref.on('value', gotData, errData);


// ---> To find your config object:
// They will provide it during Firebase setup
// or (if your project already created)
// 1. Go to main console page
// 2. Click on project
// 3. On project home page click on name of app under project name (in large font)
// 4. Click the gear icon --> it's in there!


}

function draw() {

}
