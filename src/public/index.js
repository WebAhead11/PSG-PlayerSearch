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
  //here will be the display to the user (html) in dev with id "dataPreview"
  if(playerToSearch!=""){
    let PlayerCardHtml = "";
    /*
       
        
        "": 24,
        "PREVIOUS_CLUBS": [{"FC Barcelona":"2004-2021"}],
      
    */
    if(Array[0]["Id"]>=100){
      PlayerCardHtml += "<div class='shirtNumber'>Not choosen yet</div>"
    }
    else{
      PlayerCardHtml += "<div class='shirtNumber'>" + Array[0]["Id"] + "</div>"    
    }
  
  PlayerCardHtml += "<div class='playerName'>"+ Array[0]['Name'] +"</div>"
  PlayerCardHtml += "<div class='playerCard'>"
  //PlayerCardHtml += "<div><img src='./public/IMG/"+Array[0]['Id']+".png'></div>"
  let styleC = "background-image: url(./public/IMG/"+Array[0]['Id']+".png);"
  PlayerCardHtml += "<div style='" + styleC + " background-repeat: no-repeat;'>";
  PlayerCardHtml += "<div>Birthdate: " + Array[0]["Birthdate"] +" </div>";
  PlayerCardHtml += "<div>Nationality: " + Array[0]["Nationality"] +" </div>";
  PlayerCardHtml += "<div>Profile: " + Array[0]["Profile"] +" </div>"
  PlayerCardHtml += "<div>Signed_at_PSG: " + Array[0]["Signed_at_PSG"] +" </div>"
  PlayerCardHtml += "<div>Position: " + Array[0]["Position"] +" </div>"
  if(Array[0]["Games_played"]>-1){
    PlayerCardHtml += "<div>Games_played: " + Array[0]["Games_played"] +" </div>"
  }
  else
  {
    PlayerCardHtml += "<div>Games_played: No Data To Preview </div>"
  }
  if(Array[0]["Minutes_played"]>-1){
    PlayerCardHtml += "<div>Minutes_played: " + Array[0]["Minutes_played"] +" </div>"
  }
  else
  {
    PlayerCardHtml += "<div>Minutes_played: No Data To Preview </div>"
  }
  //previous clubs
  PlayerCardHtml += "<div>PREVIOUS_CLUBS: " + Array[0]["PREVIOUS_CLUBS"][0] +" </div>"
  let arr= Array[0]["PREVIOUS_CLUBS"][0];
  console.log(arr);
  for(let club in arr){
      console.log(club,arr[club]);
      
  }
  // arr.forEach(element => {
  //   console.log(element);
  // });
  if (Array[0]["Website"]!=""){
    PlayerCardHtml += "<div>Website: <a href='" + Array[0]["Website"] +"' target='_blank'>"+ Array[0]['Name']+"</a></a></div>";
  }
  else{
    PlayerCardHtml += "<div>Website: No data</div>";
  }
  if (Array[0]["Facebook"]!=""){
    PlayerCardHtml += "<div>Facebook: <a href='" + Array[0]["Facebook"] +"' target='_blank'>"+ Array[0]['Name']+"</a></a></div>";
  }
  else{
    PlayerCardHtml += "<div>Facebook: No data</div>";
  }
  
  PlayerCardHtml += "</div>"
  PlayerCardHtml += "</div>"
    console.log(PlayerCardHtml);
  document.getElementById("dataPreview").innerHTML = PlayerCardHtml;
  }
  else{
    document.getElementById("dataPreview").innerHTML = "Paris";
  }
  
  })
  .catch((err)=>{
  //console.log(err) have to msg on html
  });
});
