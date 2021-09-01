const fs = require("fs");
const path = require("path");
const readFS =path.join(__dirname,".." ,"api.json");
function getSpesPlayerCard(name){
    const file=fs.readFileSync(readFS,{encoding: "utf-8"});
    const playersCards = JSON.parse(file);
    const playerCrad = playersCards.players_list.filter((player)=>{
        name = name.replace("%20"," ").toLowerCase();
        if ((player.Name).toLowerCase().indexOf(name)!=-1){

            return player;
        }
    });
   return playerCrad;
}
module.exports = getSpesPlayerCard;