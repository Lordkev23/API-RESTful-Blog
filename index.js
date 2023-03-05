const { connection } = require("./database/connection")
const express = require("express")
const cors = require("cors")

//Starting app
console.log("NodeJS App works");

//Data Base Connection
connection();

//Create Node Server
const app = express();
const port = 3900;

//Cors Configuration
app.use(cors());

//Change Body to Object JS
app.use(express.json());

//Routes

//Server & listen http requests
app.listen(port, ()=>{
    console.log("Server is running in port " + port);
})