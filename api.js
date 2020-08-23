// const axios = require("axios");
// configuring the dotenv so that I can use process.env
// const dotenv = require('dotenv');
// const result= dotenv.config();
// AXIOS syntax to get response from rapid api 
function getData(symbol_string){
    // return a promise
    return axios({
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
            "symbol":symbol_string,
            "interval":"15m",
            "range":"1d"
        }
    })
}
