var AppController = require("./AppController");

module.exports = {

    getLogin : async function(username) {
        return AppController.login(username);
    },

    postRegister : async function () {
        return AppController.register();
    },

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