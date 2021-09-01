
fetch("http://localhost:3000/data")
.then(response => {
// console.log(response.json());
 return response.json();
}).then((Array)=>{
   //console.log("data:" + Array);
   var options = '';
   for (var i = 0; i < Array.length; i++) {
   options += '<option value="' + Array[i] + '" />';
 }

 document.getElementById('players').innerHTML = options;
}).catch((err)=>{
  console.log(err)
});



let typing = document.getElementById("playerName");
typing.addEventListener("submit", (event) => {
   //here the connection to server start and we serach for competable matches

  });


