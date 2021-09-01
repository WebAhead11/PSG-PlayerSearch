
fetch("http://localhost:3000/data")
.then(response => {
// console.log(response.json());
 return response.json();
}).then((Array)=>{
   console.log("data:" + Array);
   var options = '';
   for (var i = 0; i < Array.length; i++) {
   options += '<option value="' + Array[i] + '" />';
 }

 document.getElementById('players').innerHTML = options;
}).catch((err)=>{
  console.log(err)
});

//const api = require("../api.json");
//console.log(api);

// let typing = document.getElementById("playerName");
// typing.addEventListener("submit", (event) => {
//   //here the connection to server start and we serach for competable matches
// });


//onload server the datalist will be filled
//players id of list
//is this possible to work here with documnet
// const arr = api.getPlayers();
// consonle.log(arr);
// var options = '';

// for (var i = 0; i < arr.length; i++) {
//   options += '<option value="' + arr[i] + '" />';
// }

// document.getElementById('players').innerHTML = options;