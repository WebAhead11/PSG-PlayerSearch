fetch("http://localhost:3000/data")
  .then((response) => {
    return response.json();
  })
  .then((Array) => {
    var options = "";
    for (var i = 0; i < Array.length; i++) {
      options += '<option value="' + Array[i] + '" />';
    }
    document.getElementById("players").innerHTML = options;
    // .then((Array)=>{
    //here will be the display to the user (html) in dev with id "dataPreview"
    const playerToSearch = document.getElementById("playerName").value;

    if (playerToSearch != "") {
      let PlayerCardHtml = "";
      if (Array[0]["Id"] >= 100) {
        PlayerCardHtml += "<div class='shirtNumber'>Not choosen yet</div>";
      } else {
        PlayerCardHtml +=
          "<div class='shirtNumber'>" + Array[0]["Id"] + "</div>";
      }

      PlayerCardHtml +=
        "<div class='playerName'>" + Array[0]["Name"] + "</div>";
      PlayerCardHtml += "<div class='playerCard'>";
      let styleC =
        "background-image: url(./public/IMG/" + Array[0]["Id"] + ".png);";
      PlayerCardHtml +=
        "<div style='" + styleC + " background-repeat: no-repeat;'>";
      PlayerCardHtml += "<div>Birthdate: " + Array[0]["Birthdate"] + " </div>";
      PlayerCardHtml +=
        "<div>Nationality: " + Array[0]["Nationality"] + " </div>";
      PlayerCardHtml += "<div>Profile: " + Array[0]["Profile"] + " </div>";
      PlayerCardHtml +=
        "<div>Signed_at_PSG: " + Array[0]["Signed_at_PSG"] + " </div>";
      PlayerCardHtml += "<div>Position: " + Array[0]["Position"] + " </div>";
      if (Array[0]["Games_played"] > -1) {
        PlayerCardHtml +=
          "<div>Games_played: " + Array[0]["Games_played"] + " </div>";
      } else {
        PlayerCardHtml += "<div>Games_played: No Data To Preview </div>";
      }
      if (Array[0]["Minutes_played"] > -1) {
        PlayerCardHtml +=
          "<div>Minutes_played: " + Array[0]["Minutes_played"] + " </div>";
      } else {
        PlayerCardHtml += "<div>Minutes_played: No Data To Preview </div>";
      }
      //previous clubs
      const arr = Array[0]["PREVIOUS_CLUBS"];

      if (arr.length > 0) {
        //const newArr = arr.split(",");
        PlayerCardHtml += "<div>PREVIOUS_CLUBS:</div>";
        //for(let x=0;x<newArr.length;x++){
        // PlayerCardHtml += "<div>" + newArr[x]+" </div>"

        //}
      } else {
        PlayerCardHtml += "<div>PREVIOUS_CLUBS: No Data To Preview.</div>";
      }
      if (Array[0]["Website"] != "") {
        PlayerCardHtml +=
          "<div>Website: <a href='" +
          Array[0]["Website"] +
          "' target='_blank'>" +
          Array[0]["Name"] +
          "</a></a></div>";
      } else {
        PlayerCardHtml += "<div>Website: No data</div>";
      }
      if (Array[0]["Facebook"] != "") {
        PlayerCardHtml +=
          "<div>Facebook: <a href='" +
          Array[0]["Facebook"] +
          "' target='_blank'>" +
          Array[0]["Name"] +
          "</a></a></div>";
      } else {
        PlayerCardHtml += "<div>Facebook: No data</div>";
      }

      PlayerCardHtml += "</div>";
      PlayerCardHtml += "</div>";
      //console.log(PlayerCardHtml);
      document.getElementById("dataPreview").innerHTML = PlayerCardHtml;
    } else {
      document.getElementById("dataPreview").innerHTML = "Paris";
    }
  })
  .catch((err) => {
    console.log(err);
  });
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const playerToSearch = document.getElementById("playerName").value;
  fetch(`http://localhost:3000/card?player=${playerToSearch}`)
    .then((response) => {
      return response.json();
    })
    .then((arr2) => {
      //here will be the display to the user (html) in dev with id "dataPreview"
      if (playerToSearch != "") {
        let PlayerCardHtml = "<div class='shrtNum_plyrName'>";
        if (arr2[0]["Id"] >= 100) {
          PlayerCardHtml += "<div class='shirtNumber'>Not choosen yet</div>";
        } else {
          PlayerCardHtml +=
            "<div class='shirtNumber'>" + arr2[0]["Id"] + "</div>";
        }

        console.log(1);

        PlayerCardHtml +=
          "<div class='playerName'>" + arr2[0]["Name"] + "</div>";
        PlayerCardHtml += "</div>";
        PlayerCardHtml += "<div class='playerCard'>";
        //PlayerCardHtml += "<div><img src='./public/IMG/"+arr2[0]['Id']+".png'></div>"
        let styleC =
          "background-image: url(./public/IMG/" + arr2[0]["Id"] + ".png);";
        PlayerCardHtml +=
          "<div class='Img_other' style='" +
          styleC +
          " background-repeat: no-repeat;'>";
        PlayerCardHtml +=
          "<div class='other'>Birthdate : " + arr2[0]["Birthdate"] + " </div>";
        PlayerCardHtml +=
          "<div class='other'>Nationality : " +
          arr2[0]["Nationality"] +
          " </div>";
        PlayerCardHtml +=
          "<div class='other'>Profile : " + arr2[0]["Profile"] + " </div>";
        PlayerCardHtml +=
          "<div class='other'>Signed_at_PSG : " +
          arr2[0]["Signed_at_PSG"] +
          " </div>";
        PlayerCardHtml +=
          "<div class='other'>Position : " + arr2[0]["Position"] + " </div>";
        if (arr2[0]["Games_played"] > -1) {
          PlayerCardHtml +=
            "<div class='other'>Games_played : " +
            arr2[0]["Games_played"] +
            " </div>";
        } else {
          PlayerCardHtml +=
            "<div class='other'>Games_played : No Data To Preview </div>";
        }
        if (arr2[0]["Minutes_played"] > -1) {
          PlayerCardHtml +=
            "<div class='other'>Minutes_played : " +
            arr2[0]["Minutes_played"] +
            " </div>";
        } else {
          PlayerCardHtml +=
            "<div class='other'>Minutes_played : No Data To Preview </div>";
        }
        //previous clubs
        PlayerCardHtml += "<div class='other'>PREVIOUS_CLUBS : " + " </div>";

        console.log("AZIZ", arr2[0]["PREVIOUS_CLUBS"][0]["Santos FC"]);
        let arr = arr2[0]["PREVIOUS_CLUBS"];

        PlayerCardHtml += "<div class='other'>";

        // Object.keys(obj) ['santos Fc']

        arr.forEach((obj) => {
          const key = Object.keys(obj)[0];
          PlayerCardHtml += `<span>${key} ${obj[key]} </span>`;
        });

        PlayerCardHtml += "</div>";

        if (arr2[0]["Website"] != "") {
          PlayerCardHtml +=
            "<div class='other'>Website : <a href='" +
            arr2[0]["Website"] +
            "' target='_blank'>" +
            arr2[0]["Name"] +
            "</a></a></div>";
        } else {
          PlayerCardHtml += "<div class='other'>Website : No data</div>";
        }
        if (arr2[0]["Facebook"] != "") {
          PlayerCardHtml +=
            "<div class='other'>Facebook : <a href='" +
            arr2[0]["Facebook"] +
            "' target='_blank'>" +
            arr2[0]["Name"] +
            "</a></a></div>";
        } else {
          PlayerCardHtml += "<div class='other'>Facebook: No data</div>";
        }

        PlayerCardHtml += "</div>";
        PlayerCardHtml += "</div>";
        console.log(PlayerCardHtml);
        document.getElementById("dataPreview").innerHTML = PlayerCardHtml;
      } else {
        document.getElementById("dataPreview").innerHTML = "Paris";
      }
    })
    .catch((err) => {
      //console.log(err) have to msg on html
    });
});
