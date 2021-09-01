const fs = require("fs");
const path = require("path");

const readFS =path.join(__dirname,".." ,"api.json");

function getPlayersName(){
    const file=fs.readFileSync(readFS,{encoding: "utf-8"});
    const playersName = JSON.parse(file);
    const arrPlayerName = playersName.players_list.map((player)=>{
        return player.Name;
    });
    return arrPlayerName;
}

module.exports = getPlayersName;