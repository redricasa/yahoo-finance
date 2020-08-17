const axios = require("axios");
// configuring the dotenv so that I can use process.env
const dotenv = require('dotenv');
const result= dotenv.config();

// AXIOS syntax to get response from rapid api 
axios({
    "method":"GET",
    "url":process.env.API_URL,
    "headers":{
        "content-type":"application/json",
        "x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key":process.env.API_KEY,
        "useQueryString":true
    },
    "params":{
        "region":"US",
        "lang":"en",
        "symbol":"APPL",
        "interval":"5m",
        "range":"1d"
    }
})
.then((response)=>{
    console.log('RESPONSE-------------------- /n', response)
})
.catch((error)=>{
    console.log('ERROR--------------------  /n', error)
})

// async function getStock(){
//     try{
//         const response = await axios.get();
//         console.log("Response-----: ", response);
//     }catch(error){
//         console.log("Error-----: ", error)
//     }
// }
