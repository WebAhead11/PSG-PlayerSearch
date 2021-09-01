const homeHandler = require("./handlers/home");
const publicHandler = require("./handlers/public");
const missingHandler = require("./handlers/missing");
const getData = require("./handlers/getData");
const getPlayers = require("./handlers/getData");

function router(request, response) {
  const url = request.url;
  if (url === "/") {
    homeHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  }
  else if(url==="/data")
  {
    getPlayers(request,response);
  } 
  // else if(url.includes("?playerName=")){
  //   getPlayerCard();
  // }
  else {
    missingHandler(request, response);
  }
}

module.exports = router;
