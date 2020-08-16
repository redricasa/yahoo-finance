const axios = require("axios");
// configuring the dotenv so that I can use process.env
const dotenv = require('dotenv');
const result= dotenv.config();
// if (result.error) {
//     throw result.error;
// }
// const { parsed: envs } = result;
// console.log(envs);
// module.exports = envs;

// const { endpoint, masterKey, port } = require('./config');

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
    console.log('RESPONSE-------------------- /n', response)
})
.catch((error)=>{
    console.log('ERROR--------------------  /n', error)
})