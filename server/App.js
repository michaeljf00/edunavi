const http = require("http");
const app = require("express");
var DataController = require("./DataController");

const host = 'localhost';
const port = 8000;

// Handles all requests and responses from/to the user.
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

// Starts the server...
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    DataController.findCollege("Rensselaer Polytechnic Institute").catch(console.dir);
    
    console.log(`Server is running on http://${host}:${port}`);
});