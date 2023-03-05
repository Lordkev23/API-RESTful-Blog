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
app.use(express.json()
);

//Routes
app.get("/pruebe", (req,res)=>{

    console.log("End Point 'pruebe' working");

    return res.status(200).json([{
        name: "Kevin",
        lastname: "Villanueva",
        age: "28 years old"
    }, 
    {
        name: "David",
        lastname: "Villanueva",
        age: "26 years old"
    }, 
    {
        name: "Nathaly",
        lastname: "Villanueva",
        age: "17 years old"
    }]);

});

app.get("/", (req,res)=>{

    return res.status(200).send(`
        <div>
            <h1>Starting a new project</h1>
            <h2>about Api Rest</h2>
            <h3>with Node & MongoDB</h3>
        </div>
    `);
});

//Server & listen http requests
app.listen(port, ()=>{
    console.log("Server is running in port " + port);
})