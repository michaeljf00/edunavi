var AppController = require("./AppController");

module.exports = {

    /**
     * Verifies if the login information is correct.
     * @param {String} The user's email
     * @returns A JSON object indicating whether the
     * user's email and password were correct.
     */
    getLogin : async function(username) {
        return AppController.login(username);
    },

    /**
     * Registers a student for the website. 
     * @param {JSON} A representation of the student's 
     * profile.
     * @returns A JSON object indicating whether the 
     * registration process was successful.
     */
    postRegister : async function () {
        return AppController.register();
    },

    /**
     * Gets a list of colleges associated with the college's name.
     * @param {String} The name of the college.
     * @returns {JSON} A JSON object containing a list of all the colleges
     * associated with the college name. See ../model/README.md to see 
     * the expected return object structure.
     */
    getColleges : async function(collegeName){
        return AppController.getColleges(collegeName);
    },

    /**
     * Gets the college associated with the college id.
     * @param {String} The college id.
     * @returns {JSON} A JSON object containing information about the college.
     * See ../model/README.md to see the expected return object structure.
     */
    getCollege : async function(collegeID) {
        return AppController.getCollege(collegeID);
    },

    /**
     * Gets the course associated with the course id. 
     * @param {String} The course's id.
     * @returns {JSON} A JSON object containing information about the course.
     * See ../model/README.md to see the expected return object structure.
     */
    getCourse : async function(courseID) {
        return AppController.getCourse(courseID);
    },

    /**
     * Gets the courses associated with a college and program.
     * @param {String} The id of the college
     * @param {String} The program id of the courses.
     * @returns A JSON object containing a list of all the courses
     * associated with the college name. See ../model/README.md to see 
     * the expected return object's structure.
     */
    getCourses : async function(collegeID, programID) {
        return AppController.getCourses(collegeID, programID);
    },

    /**
     * Gets a student's chance of acceptance.
     * @returns A JSON object containing the student's chance of 
     * acceptance. See See ../model/README.md to see the expected
     * return object's structure.
     */
    getMyChance : async function(){
        var resp = { chance: await AppController.getMyChance() }
        return resp;
    },

    /**
     * Uses our updated rate-my-chance calculator to calculate the student's chance of acceptance.
     * @param {Number} collegeAdmissionRate The acceptance rate of the college.
     * @param {Number} gpa The unweighted GPA of the student (out of 4.0)
     * @param {Number} testScore The student's best test score.
     * @param {Number} topTestScore The highest cumulative value of the test provided.
     * @returns A JSON object containing the student's chance of 
     * acceptance. See See ../model/README.md to see the expected
     * return object's structure.
     */
    getMyChanceStrict : async function(collegeAdmissionRate, gpa, testScore, topTestScore){
        var resp = { chance: await AppController.getMyChanceStrict(collegeAdmissionRate, gpa, testScore, topTestScore) }
        return resp;
    }

}