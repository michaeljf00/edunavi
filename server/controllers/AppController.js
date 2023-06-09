
var UserAccounts = require("./UserAccounts")
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
        /// Check if user is in databse
        // If in database allow login and switch page
        return UserAccounts.findUser(email);
    },

    /**
     * Registers a student for the website. 
     * @param {JSON} A representation of the student's 
     * profile.
     * @returns A JSON object indicating whether the 
     * registration process was successful.
     */
    register : async function (name, userEmail, password) {
        return UserAccounts.registerUser(name, userEmail, password);
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
        return await ChanceCalculator.rateMyChance();
    },


    /**
     * Gets a student's chance of acceptance.
     * @param {Number} collegeAdmissionRate The acceptance rate of the college.
     * @param {Number} gpa The unweighted GPA of the student (out of 4.0)
     * @param {Number} testScore The student's best test score.
     * @param {Number} topTestScore The highest cumulative value of the test provided.
     * @returns The probability of a student getting accepted.
     */
    getMyChanceStrict : async function(collegeAdmissionRate, gpa, testScore, topTestScore) {
        return await ChanceCalculator.rateMyChanceV2(collegeAdmissionRate, gpa, testScore, topTestScore);
    }

}