const express = require("express");
const bodyParser = require("body-parser"); 

const { PORT } = require('./config/ServerConfig');
const CityRepository = require('./repository/city-repository');

const setupAndStartServer = async () => {
    // Create the express object
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT,  async () => {
        console.log(`Server Started at ${PORT}`);
       
    });
};

// Call the function to start the server
setupAndStartServer();
