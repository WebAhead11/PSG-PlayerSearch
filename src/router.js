const homeHandler = require("./handlers/home");
const publicHandler = require("./handlers/public");
const missingHandler = require("./handlers/missing");
const getPlayers = require("./handlers/getData");
const getPlayerCard = require("./handlers/getCard");

function router(request, response) {
  const url = request.url;
  if (url === "/") {
    homeHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  }
  else if(url.includes("/card")){
    getPlayerCard(request,response);
  }
  else if(url.includes("/data"))
  {
    getPlayers(request,response);
  } 
  else {
    missingHandler(request, response);
  }
}

module.exports = router;
