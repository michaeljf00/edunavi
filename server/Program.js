const http = require("http");
const express = require("express");
var DataController = require("./DataController");

const host = 'localhost';
const port = 8000;

// Starts the server...
const server = express();

// getLogin
// TODO: Add functionality
server.get("/login/:username", (req, res) => {
    res.json({valid: true});
});

// postRegister
// TODO: Add functionality
server.get("/register", (req, res) => {
    res.json({valid : true});
})

// 
server.get("/findcollege/:name", (req, res) => {
    console.log(req.params.name);
    console.log(DataController.findCollege("Rensselaer Polytechnic Institute").catch(console.dir));
    res.json({message: "Hello"});
});


server.listen(port, host, () => {
    DataController.findCollege("Rensselaer Polytechnic Institute").catch(console.dir);
    console.log(`Server is running on http://${host}:${port}`);
});