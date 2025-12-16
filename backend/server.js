require('dotenv').config();
const express = require('express');
const databaseConnection = require('./configuration/db');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;

const StartServer = async () => {
    try{
        await databaseConnection(MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`server is running at http://localhost:${PORT}`);
        })
    }catch(error){
        console.error('server is failed to connect', error.message);
        process.exit(1);
    }
}

StartServer();