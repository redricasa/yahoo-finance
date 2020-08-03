const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-charts",
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