const http = require("http");
const express = require("express");
var APIController = require("./controllers/APIController");

const host = 'localhost';
const port = 8000;

// Starts the server...
const server = express();

// TODO: Pass in request information in the request body instead 
//       of request parameters.

/**
 * Handles GET LOGIN requests.
 */
// TODO: Add functionality
server.get("/login/:username", async (req, res) => {
    res.json({valid: true});
});

/**
 * Handles POST REGISTER requests.
 */
// TODO: Add functionality
server.post("/register", async (req, res) => {
    res.json({valid : true});
});

/**
 * Handles GET COLLEGES requests.
 */
server.get("/findcolleges/:name", async (req, res) => {
    var resp = await APIController.getColleges(req.params.name);
    res.json(resp);
});

/**
 * Handles GET COLLEGE requests.
 */
server.get("/getcollege/:collegeID", async (req, res) => {
    var resp = await APIController.getCollege(req.params.collegeID);
    res.json(resp);
});

/**
 * Handles GET COURSE requests.
 */
server.get("/getcourse/:courseID", async (req, res) => {
    var resp = await APIController.getCourse(req.params.courseID);
    res.json(resp);
});

/**
 * Handles GET COURSES requests.
 */
server.get("/getcourses/:collegeID/:programID", async (req, res) => {
    var resp = await APIController.getCourses(req.params.collegeID, req.params.programID);
    res.json(resp);
});

/**
 * Handles GET CHANCE requests
 */
server.get("/chance", async (req, res) => {
    var resp = await APIController.getMyChance();
    res.json(resp);
});

/**
 * Handles GET CHANCE requests with extra details.
 * @param {Number} collegeAdmissionRate The acceptance rate of the college.
 * @param {Number} gpa The unweighted GPA of the student (out of 4.0)
 * @param {Number} testScore The student's best test score.
 * @param {Number} topTestScore The highest cumulative value of the test provided.
 */
server.get("/chance/:acceptanceRate/:gpa/:testscore/:toptestscore", async (req, res) => {
    var resp = await APIController.getMyChanceStrict(
        req.params.acceptanceRate, 
        req.params.gpa,
        req.params.testscore,
        req.params.toptestscore);
    res.json(resp);
});

/**
 * Starts the server...
 */
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});