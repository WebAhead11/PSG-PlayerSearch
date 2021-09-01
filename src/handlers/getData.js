/*
//Important:
if Id>=100 that mean this player don"t have number for his shirt yet
if Games_played===-1 that mean no data at pares website
if Minutes_played===-1 that mean no data at pares website
other fiedls that empty string because no data at pares website
*/
const getPlayersName = require("./getJosn")


function getPlayers(request,response){

    let body = "" ;
    request.on("data",(chunk)=>{
        body += chunk.toString();
    })
    request.on("end",()=>{
        const result = getPlayersName();
        response.writeHead(200,{"content-type":"application/json"});
        response.end(JSON.stringify(result));
    })
        
    
 
        // (error, file) => {
        //     if (error) {
        //         console.log(error);
        //       } else {
        //         const data = JSON.parse(file);
        //         // console.log(data);
        //         let playersArr = data.players_list;
        //         return playersArr;
        //       }
        //   }







        // const playersArr = [];
    // players_list.forEach(element => {
    //     playersArr.push(element["name"]);
    // });
    // return playersArr;
}

module.exports = getPlayers;