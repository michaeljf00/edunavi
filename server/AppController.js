var DataController = require("./DataController");

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
        
    }
}