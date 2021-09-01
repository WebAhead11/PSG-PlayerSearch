fetch("http://localhost:3000/data")
.then(response => {
  return response.json();
})
.then((Array)=>{
  var options = '';
  for (var i = 0; i < Array.length; i++) {
    options += '<option value="' + Array[i] + '" />';
  }
  document.getElementById('players').innerHTML = options;
})
.catch((err)=>{
  console.log(err)
});
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const playerToSearch = document.getElementById("playerName").value;
  fetch(`http://localhost:3000/card?player=${playerToSearch}`)
  .then(response => {
    return response.json();
  })
  .then((Array)=>{
  //console.log(Array)
  //here will be the display to the user (html) in dev with id "dataPreview"
  
  })
  .catch((err)=>{
  //console.log(err) have to msg on html
  });
});
