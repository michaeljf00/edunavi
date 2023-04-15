var DataController = require("./DataController");
var ChanceCalculator = require("./model/RateMyChances");

module.exports = {

    /**
     * 
     * @param {String} username 
     */
    login : async function (username) {
        // TODO: Add implementation
        return { valid : true }
    },

    register : async function () {
        // TODO: Add implementation
        return { successful : true }
    },

    getColleges : async function(collegeName) {
        return DataController.findColleges(collegeName);
    },

    getCollege : async function(collegeID) {
        return DataController.findCollege(collegeID);
    },

    getCourse : async function(courseID) {
        return DataController.getCourse(courseID);
    },

    getCourses : async function(collegeID, programID) {
        return DataController.getCourses(collegeID, programID);
    },

    getMyChance : async function() {
        return ChanceCalculator.rateMyChance();
    }
}