/*
Important:
if Id>=100 that mean this player don"t have number for his shirt yet
if Games_played===-1 that mean no data at pares website
if Minutes_played===-1 that mean no data at pares website
other fiedls that empty string because no data at pares website
*/


const players_list = [
    {
        Id: 30, //same as shirt number
        Name: "Lionel Messi",
        Birthdate: "June 24th 1987, Rosario",
        Nationality:"Argentinian",
        Profile: "169 cm / 67 kg",
        Signed_at_PSG :"August 10th 2021",
        Position :"Forward",
        Games_played: 1,
        Minutes_played: 24,
        PREVIOUS_CLUBS: [{"FC Barcelona":"2004-2021"}],
        Website: "https://messi.com",
        Facebook: "https://www.facebook.com/leomessi"
    },
    {
        Id: 10, //same as shirt number
        Name: "Neymar Jr",
        Birthdate: "February 5th 1992, Mogi Das Cruzes",
        Nationality:"Brazilian",
        Profile: "175cm / 68kg",
        Signed_at_PSG :"August 3rd 2017",
        Position :"Forward",
        Games_played: 1,
        Minutes_played: 66,
        PREVIOUS_CLUBS: [{"Santos FC":"2009-2013","FC Barcelona":"2013-2017"}],
        Website: "https://neymarjr.com",
        Facebook: "https://www.facebook.com/neymarjr/"
    },
    {
        Id: 1, //same as shirt number
        Name: "Keylor Navas",
        Birthdate: "December 16th 1986, San Isidro de El General (Costa Rica)",
        Nationality:"Costa Rican",
        Profile: "185 cm / 80 kg",
        Signed_at_PSG :"September 2nd 2019",
        Position :"Goal Keeper",
        Games_played: 4,
        Minutes_played: 360,
        PREVIOUS_CLUBS: [{"Deportivo Saprissa":"2005-2010","Albacete Balompié":"2010-2011","Levante UD":"2011-2014","Real Madrid":"2014-2019"}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 16, //same as shirt number
        Name: "Sergio Rico",
        Birthdate: "September 1st 1993, Sevilla (Spain)",
        Nationality:"Spain",
        Profile: "195 cm / 90kg",
        Signed_at_PSG :"September 1st 2019",
        Position :"Goal Keeper",
        Games_played: 0,
        Minutes_played: 0,
        PREVIOUS_CLUBS: [{"Sevilla FC":"2014-2018","Fulham FC": "2018-2019"}],
        Website: "https://www.sergioricooficial.com",
        Facebook: ""
    },
    {
        Id: 50, //same as shirt number
        Name: "Gianluigi Donnarumma",
        Birthdate: "February 25th 1999, Castellammare di Stabia",
        Nationality:"Italian",
        Profile: "196 cm / 90 kg",
        Signed_at_PSG :"July 14th 2021",
        Position :"Goal Keeper",
        Games_played: 0,
        Minutes_played: 0,
        PREVIOUS_CLUBS: [{"AC Milan":"2015-2021"}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 100, //same as shirt number
        Name: "Denis Franchi",
        Birthdate: "",
        Nationality:"",
        Profile: "",
        Signed_at_PSG :"",
        Position :"Goal Keeper",
        Games_played: -1,
        Minutes_played: -1,
        PREVIOUS_CLUBS: [{}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 101, //same as shirt number
        Name: "Alexandre Letellier",
        Birthdate: "December 11th 1990, Paris",
        Nationality:"French",
        Profile: "193 cm / 93 kg",
        Signed_at_PSG :"September 25th 2020",
        Position :"Goal Keeper",
        Games_played: 0,
        Minutes_played: 0,
        PREVIOUS_CLUBS: [{"BSC Young Boys":"2017-2018","ES Troyes FC":"2018-2019","Sarpsborg 08 FF":"2019-2020","US Orléans":"2019-2020","Angers SCO":"2012-2020"}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 2, //same as shirt number
        Name: "Achraf Hakimi",
        Birthdate: "November 4th 1998, Madrid (Spain)",
        Nationality:"Morocco",
        Profile: "181 cm / 73 kg",
        Signed_at_PSG :"July 6th 2021",
        Position :"Defender",
        Games_played: 4,
        Minutes_played: 360,
        PREVIOUS_CLUBS: [{"Real Madrid":"2017-2018","Borussia Dortmund":"2018-2020","Inter Milan":"2020-2021"}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 3, //same as shirt number
        Name: "Presnel Kimpembe",
        Birthdate: "August 13th 1995, Beaumont-sur-Oise",
        Nationality:"Defender",
        Profile: "183cm / 77kg",
        Signed_at_PSG :"March 17th 2015",
        Position :"Forward",
        Games_played: 4,
        Minutes_played: 285,
        PREVIOUS_CLUBS: [{}],
        Website: "",
        Facebook: "https://www.facebook.com/presnelkimpembeofficial"
    },
    {
        Id: 4, //same as shirt number
        Name: "Sergio Ramos",
        Birthdate: "March 30th 1986, Camas (Spain)",
        Nationality:"Spanish",
        Profile: "184 cm / 82 kg",
        Signed_at_PSG :"July 7th 2021",
        Position :"Defender",
        Games_played: 0,
        Minutes_played: 0,
        PREVIOUS_CLUBS: [{"Sevilla FC":"2004-2005","Real Madrid": "2005-2021"}],
        Website: "https://www.sergioramos.com",
        Facebook: ""
    },
    {
        Id: 5, //same as shirt number
        Name: "Marquinhos",
        Birthdate: "May 14th 1994, Sao Paulo",
        Nationality:"Brazilian",
        Profile: "183cm / 75kg",
        Signed_at_PSG :"July 19th 2013",
        Position :"Defender",
        Games_played: 1,
        Minutes_played: 90,
        PREVIOUS_CLUBS: [{"Sport Club Corinthians Paulista":"2011-2012","AS Roma":"2012-2013"}],
        Website: "http://marquinhosm5.com",
        Facebook: "https://www.facebook.com/m5marquinhos"
    },
    {
        Id: 14, //same as shirt number
        Name: "Juan Bernat",
        Birthdate: "March 1st 1993, Cullera",
        Nationality:"Spanish",
        Profile: "177cm / 67kg",
        Signed_at_PSG :"August 31st 2018",
        Position :"Defender",
        Games_played: 0,
        Minutes_played: 0,
        PREVIOUS_CLUBS: [{"Valencia CF":"2011-2014","FC Bayern Munich":"2014-2018"}],
        Website: "",
        Facebook: "https://www.facebook.com/J.BernatOfficial"
    },
    {
        Id: 17, //same as shirt number
        Name: "Colin Dagba",
        Birthdate: "September 9th 1998, Béthune",
        Nationality:"French",
        Profile: "170cm / 62kg",
        Signed_at_PSG :"July 20th 2018",
        Position :"Defender",
        Games_played: 0,
        Minutes_played: 0,
        PREVIOUS_CLUBS: [{}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 20, //same as shirt number
        Name: "Layvin Kurzawa",
        Birthdate: "September 4th 1992, Fréjus",
        Nationality:"Français",
        Profile: "182cm / 74kg",
        Signed_at_PSG :"August 27th 2015",
        Position :"Defender",
        Games_played: 0,
        Minutes_played: 0,
        PREVIOUS_CLUBS: [{"AS Monaco":"2010-2015"}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 22, //same as shirt number
        Name: "Abdou Diallo",
        Birthdate: "May 4th 1996, Tours",
        Nationality:"French",
        Profile: "187 cm / 79kg",
        Signed_at_PSG :"July 16th 2019",
        Position :"Defender",
        Games_played: 4,
        Minutes_played: 345,
        PREVIOUS_CLUBS: [{"AS Monaco":"2014-2017","Zulte Waregem":"2015-2016","FSV Mainz 05":"2017-2018","Borussia Dortmund":"2018-2019"}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 24, //same as shirt number
        Name: "Thilo Kehrer",
        Birthdate: "September 21st 1996, Tübingen",
        Nationality:"German",
        Profile: "186cm / 76kg",
        Signed_at_PSG :"August 16th 2018",
        Position :"Defender",
        Games_played: 4,
        Minutes_played: 360,
        PREVIOUS_CLUBS: [{"FC Schalke 04":"2016-2018"}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 31, //same as shirt number
        Name: "El Chadaille Bitshiabu",
        Birthdate: "May 16th 2005, Villeneuve-Saint-Georges",
        Nationality:"French",
        Profile: "196 cm / Unknownkg",
        Signed_at_PSG :"July 27th 2020",
        Position :"Defender",
        Games_played: 0,
        Minutes_played: 0,
        PREVIOUS_CLUBS: [{}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 6, //same as shirt number
        Name: "Marco Verratti",
        Birthdate: "November 5th 1992, Pescara",
        Nationality:"Italian",
        Profile: "165cm / 60kg",
        Signed_at_PSG :"July 17th 2012",
        Position :"Midfielder",
        Games_played: 2,
        Minutes_played: 147,
        PREVIOUS_CLUBS: [{"Delfino Pescara 1936":"2008-2012"}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 8, //same as shirt number
        Name: "Leandro Paredes",
        Birthdate: "June 29th 1994, San Justo",
        Nationality:"Argentinian",
        Profile: "180cm / 75kg",
        Signed_at_PSG :"January 29th 2019",
        Position :"Midfielder",
        Games_played: 1,
        Minutes_played: 15,
        PREVIOUS_CLUBS: [{"Boca Juniors":"2010-2014","Chievo Verona":"2013-2014","AS Roma":"2014-2017","Empoli FC":"2015-2016","Zénith Saint-Pétersbourg":"2017-2019"}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 11, //same as shirt number
        Name: "Angel Di María",
        Birthdate: "February 14th 1988, Rosario",
        Nationality:"Argentinian",
        Profile: "180cm / 75kg",
        Signed_at_PSG :"August 6th 2015",
        Position :"Midfielder",
        Games_played: 2,
        Minutes_played: 90,
        PREVIOUS_CLUBS: [{"Rosario Central":"2005-2007","SL Benfica":"2007-2010","Real Madrid":"2010-2014","Manchester United FC":"2014-2015"}],
        Website: "",
        Facebook: "https://www.facebook.com/AngelDiMariaJM/"
    },
    {
        Id: 12, //same as shirt number
        Name: "Rafinha",
        Birthdate: "February 12th 1992, São Paulo (Brazil)",
        Nationality:"Brazilian",
        Profile: "174 cm / 71 kg",
        Signed_at_PSG :"October 5th 2020",
        Position :"Midfielder",
        Games_played: 1,
        Minutes_played: 2,
        PREVIOUS_CLUBS: [{"FC Barcelona":"2011-2020","Celta Vigo":"2013-2014","Inter Milan":"2017-2018","Celta Vigo":"2019-2020"}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 15, //same as shirt number
        Name: "Danilo Pereira",
        Birthdate: "September 9th 1991, Bissau (Guinea-Bissau)",
        Nationality:"Guinea-Bissau",
        Profile: "188 cm / 83 kg",
        Signed_at_PSG :"October 5th 2020",
        Position :"Midfielder",
        Games_played: 2,
        Minutes_played: 120,
        PREVIOUS_CLUBS: [{"Aris Thessaloniki FC":"2010-2011","Parma Calcio 1913":"2011-2012","SV Roda JC Kerkrade":"2012-2013","CS Maritimo":"2013-2015","FC Porto":"2015-2020"}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 18, //same as shirt number
        Name: "Georginio Wijnaldum",
        Birthdate: "November 11th 1990, Rotterdam (Netherlands)",
        Nationality:"Dutch",
        Profile: "175 cm / 74 kg",
        Signed_at_PSG :"June 10th 2021",
        Position :"Midfielder",
        Games_played: 4,
        Minutes_played: 334,
        PREVIOUS_CLUBS: [{"Feyenoord Rotterdam":"2006-2011","PSV Eindhoven":"2011-2015","Newcastle United":"2015-2016","Liverpool FC":"2016-2021"}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 19, //same as shirt number
        Name: "Pablo Sarabia",
        Birthdate: "May 11th 1992, Madrid",
        Nationality:"Spanish",
        Profile: "174 cm / 70kg",
        Signed_at_PSG :"July 1st 2019",
        Position :"Midfielder",
        Games_played: 2,
        Minutes_played: 21,
        PREVIOUS_CLUBS: [{"Real Madrid":"2010-2011","Getafe CF":"2011-2016","Sevilla FC":"2016-2019"}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 21, //same as shirt number
        Name: "Ander Herrera",
        Birthdate: "August 14th 1989, Bilbao",
        Nationality:"Spanish",
        Profile: "182 cm / 71 kg",
        Signed_at_PSG :"July 4th 2019",
        Position :"Midfielder",
        Games_played: 4,
        Minutes_played: 294,
        PREVIOUS_CLUBS: [{"Real Zaragoza":"2008-2011","Athletic Bilbao":"2011-2014","Manchester United FC":"2014-2019"}],
        Website: "",
        Facebook: "https://www.facebook.com/anderherrera/"
    },
    {
        Id: 23, //same as shirt number
        Name: "Julian Draxler",
        Birthdate: "September 20th 1993, Gladbeck",
        Nationality:"German",
        Profile: "185cm / 72kg",
        Signed_at_PSG :"January 3rd 2017",
        Position :"Midfielder",
        Games_played: 4,
        Minutes_played: 173,
        PREVIOUS_CLUBS: [{"FC Schalke 04":"2010-2015","VfL Wolfsbourg":"2015-2017"}],
        Website: "",
        Facebook: "https://www.facebook.com/juliandraxler/"
    },
    {
        Id: 27, //same as shirt number
        Name: "Idrissa Gueye",
        Birthdate: "September 26th 1989, Dakar",
        Nationality:"Senegal",
        Profile: "174 cm / 66kg",
        Signed_at_PSG :"July 29th 2019",
        Position :"Midfielder",
        Games_played: 2,
        Minutes_played: 180,
        PREVIOUS_CLUBS: [{}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 34, //same as shirt number
        Name: "Xavi Simons",
        Birthdate: "April 21st 2003, Amsterdam",
        Nationality:"Dutch",
        Profile: "168 cm / 58 kg",
        Signed_at_PSG :"August 4th 2020",
        Position :"Midfielder",
        Games_played: 0,
        Minutes_played: 0,
        PREVIOUS_CLUBS: [{}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 35, //same as shirt number
        Name: "Ismael Gharbi",
        Birthdate: "",
        Nationality:"",
        Profile: "",
        Signed_at_PSG :"",
        Position :"Midfielder",
        Games_played: 1,
        Minutes_played: 9,
        PREVIOUS_CLUBS: [{}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 102, //same as shirt number
        Name: "Edouard Michut",
        Birthdate: "",
        Nationality:"",
        Profile: "",
        Signed_at_PSG :"",
        Position :"Midfielder",
        Games_played: 0,
        Minutes_played: 0,
        PREVIOUS_CLUBS: [{}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 103, //same as shirt number
        Name: "Leonil Misse",
        Birthdate: "",
        Nationality:"",
        Profile: "",
        Signed_at_PSG :"",
        Position :"Midfielder",
        Games_played: -1,
        Minutes_played: -1,
        PREVIOUS_CLUBS: [{}],
        Website: "",
        Facebook: ""
    },
    {
        Id: 7, //same as shirt number
        Name: "Kylian Mbappé",
        Birthdate: "December 20th 1998, Paris",
        Nationality:"French",
        Profile: "178cm / 73kg",
        Signed_at_PSG :"August 31st 2017",
        Position :"Forward",
        Games_played: 4,
        Minutes_played: 350,
        PREVIOUS_CLUBS: [{"AS Monaco":"2015-2017"}],
        Website: "https://kylianmbappe.com/?fbclid=IwAR1mWg470fL8NWnIgJhcXVBI-UzYup90r5dUwyivctYITxYshCjxTlTRqp0",
        Facebook: "https://www.facebook.com/kylianmbappeofficiel/"
    },
    {
        Id: 9, //same as shirt number
        Name: "Mauro Icardi",
        Birthdate: "February 19th 1993, Rosario (Argentina)",
        Nationality:"Argentinan",
        Profile: "181 cm / 75 kg",
        Signed_at_PSG :"September 2nd 2019",
        Position :"Forward",
        Games_played: 3,
        Minutes_played: 264,
        PREVIOUS_CLUBS: [{"UC Sampdoria":"2012-2013","Inter Milan":"2013-2019"}],
        Website: "",
        Facebook: ""
    },
  ];

  function getPlayers(){
      const playersArr = [];
      players.forEach(element => {
          playersArr.push(element["name"]);
      });
      return playersArr;
  }

  module.exports = { getPlayers };