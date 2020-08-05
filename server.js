// Getting port number from .env
const dotenv = require('dotenv');
dotenv.config();
// getting the port # from config.js
const { port } = require('./config');
console.log(`Your port is ${port}`);
