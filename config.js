// file to configure .env file
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
    port: process.env.PORT
};
