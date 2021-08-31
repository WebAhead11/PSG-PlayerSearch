const api = require("../api");


let typing = document.getElementById("playerName");
typing.addEventListener("submit", (event) => {
  //here the connection to server start and we serach for competable matches
});


//onload server the datalist will be filled
//players id of list

const arr = api.getPlayers();
var options = '';

for (var i = 0; i < arr.length; i++) {
  options += '<option value="' + arr[i] + '" />';
}

document.getElementById('players').innerHTML = options;

