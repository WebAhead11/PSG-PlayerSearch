/*
Important:
If Id>=100 that means that this player doesn't has a shirt number yet.
If Games_played===-1 that means that there is no data at PSG's website.
If Minutes_played===-1 that means that there is no data at PSG's website.
If there are other empty fiedls that means that there is no data at PSG's website.
*/

const getSpesPlayerCard = require("./getPlayerCard")
function getPlayerCard(request,response){
    //console.log(request.url.player);
    let strUrl = request.url;
    const arrSplit=strUrl.split("=");
    let body ="";
    request.on("data",(chunk)=>{
        body += chunk.toString();
    })
    request.on("end",()=>{
        const result = getSpesPlayerCard(arrSplit[1]);
                response.writeHead(200,{"content-type":"application/json"});
                response.end(JSON.stringify(result));
            });
}
module.exports = getPlayerCard;