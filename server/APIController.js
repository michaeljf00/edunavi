var AppController = require("./AppController");

module.exports = {

    // TODO: Implement these in backend...
    getLogin : async function(username) {},
    postRegister : async function () {},

    // TODO: Add this to AppController...
    getColleges : async function(collegeName){
        return AppController.getColleges(collegeName);
    },

    getCollege : async function(collegeID) {
        return AppController.getCollege(collegeID);
    },

    getCourse : async function(courseID) {
        return AppController.getCourse(courseID);
    },

    getCourses : async function(collegeID, programID) {
        return AppController.getCourses(collegeID, programID);
    },

    getMyChance : async function(){
        return AppController.getMyChance();
    }

}