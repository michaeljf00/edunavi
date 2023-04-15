const http = require("http");
const express = require("express");
var APIController = require("./APIController");

const host = 'localhost';
const port = 8000;

// Starts the server...
const server = express();

// getLogin
// TODO: Add functionality
server.get("/login/:username", async (req, res) => {
    res.json({valid: true});
});

// postRegister
// TODO: Add functionality
server.post("/register", async (req, res) => {
    res.json({valid : true});
});

// collegesReq 
server.get("/findcolleges/:name", async (req, res) => {
    var resp = await APIController.getColleges(req.params.name);
    res.json(resp);
});

// collegeReq
server.get("/getcollege/:collegeID", async (req, res) => {
    var resp = await APIController.getCollege(req.params.collegeID);
    res.json(resp);
});

// courseReq
server.get("/getcourse/:courseID", async (req, res) => {
    var resp = await APIController.getCourse(req.params.courseID);
    res.json(resp);
});

// coursesReq
server.get("/getcourses/:collegeID/:programID", async (req, res) => {
    var resp = await APIController.getCourses(req.params.collegeID, req.params.programID);
    res.json(resp);
});

// ratemychance
server.get("/ratemychance", async (req, res) => {
    var resp = await APIController.getMyChance();
    res.json(resp);
});

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});