const axios = require("axios");
// configuring the dotenv so that I can use process.env
const dotenv = require('dotenv');
dotenv.config();
// AXIOS syntax to get response from rapid api 
axios({
    "method":"GET",
    "url":process.env.API_URL,
    "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key":process.env.API_KEY,
        "useQueryString":true
    },
    "params":{
        "region":"US",
        "lang":"en",
        "symbol":"APPL",
        "interval":"1wk",
        "range":"6mo"
    }
})
.then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log(error)
})