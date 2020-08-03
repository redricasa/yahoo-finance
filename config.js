// file to configure .env file
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    masterKey: process.env.API_KEY,
};
