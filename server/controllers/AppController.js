var DataController = require("./DataController");
var ChanceCalculator = require("../model/RateMyChances");

module.exports = {

    /**
     * Verifies if the login information is correct.
     * @param {String} The user's email
     * @returns A JSON object indicating whether the
     * user's email and password were correct.
     */
    login : async function (email) {
        // TODO: Add implementation
        return { valid : true }
    },

    /**
     * Registers a student for the website. 
     * @param {JSON} A representation of the student's 
     * profile.
     * @returns A JSON object indicating whether the 
     * registration process was successful.
     */
    register : async function (studentProfile) {
        // TODO: Add implementation
        return { successful : true }
    },

    /**
     * Gets a list of colleges associated with the college's name.
     * @param {String} The name of the college.
     * @returns {JSON} A JSON object containing a list of all the colleges
     * associated with the college name. See ../model/README.md to see 
     * the expected return object structure.
     */
    getColleges : async function(collegeName) {
        return DataController.findColleges(collegeName);
    },

    /**
     * Gets the college associated with the college id.
     * @param {String} The college id.
     * @returns {JSON} A JSON object containing information about the college.
     * See ../model/README.md to see the expected return object structure.
     */
    getCollege : async function(collegeID) {
        return DataController.findCollege(collegeID);
    },

    /**
     * Gets the course associated with the course id. 
     * @param {String} The course's id.
     * @returns {JSON} A JSON object containing information about the course.
     * See ../model/README.md to see the expected return object structure.
     */
    getCourse : async function(courseID) {
        return DataController.getCourse(courseID);
    },

    /**
     * Gets the courses associated with a college and program.
     * @param {String} The id of the college
     * @param {String} The program id of the courses.
     * @returns A JSON object containing a list of all the courses
     * associated with the college name. See ../model/README.md to see 
     * the expected return object structure.
     */
    getCourses : async function(collegeID, programID) {
        return DataController.getCourses(collegeID, programID);
    },

    /**
     * Gets a student's chance of acceptance.
     * @returns The probability of a student getting accepted.
     */
    getMyChance : async function() {
        console.log(ChanceCalculator.rateMyChance());
        return await ChanceCalculator.rateMyChance();
    }
}