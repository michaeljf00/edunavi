var DataController = require("./DataController");
var ChanceCalculator = require("./model/RateMyChances");

module.exports = {

    // TODO: Implement these...
    getLogin : async function (username) {},
    postRegister : async function () {},

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