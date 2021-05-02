var cors = require('cors')
const MainServer = require('express')
const bookRoutes=require('./route')
require('../DBConnect/database')
const server = MainServer();


server.use(MainServer.json());
server.use(cors());
server.use(bookRoutes);




server.listen("5000", "127.0.0.1", () => 
{
    try {
        console.log("Server is running on 3000");

    } catch (e) {
        console.log("Something went wrong....");
    }
})