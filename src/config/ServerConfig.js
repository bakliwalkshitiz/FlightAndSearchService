const dotenv  = require('dotenv');  // to access values from the .env file using a library like

dotenv.config();

module.exports = {
    PORT: process.env.PORT
} 