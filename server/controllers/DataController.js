const { MongoClient } = require('mongodb');
var Keys = require('./Keys');

const client = new MongoClient(Keys.getMongoClientKey());

// TODO: Make a private function that will execute a query and return an 
//       appropriate response object (less code to look through).
module.exports = {

    /**
     * Runs a query to MongoDB to retrieve all colleges 
     * with that college name. 
     * @param {string} The exact name of the college.
     * @returns { JSON } A JSON object that contains a list 
     * of every colleges found. See ./model/README.md for the
     * expected structure of the JSON objects.        
     */
    findColleges : async function(collegeName) {
        var collegesList = [];
        const dbName = "EduNavi";
        const collectionName = "College";
    
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
    
        const findQuery = { Name: collegeName };
        try{
            const cursor = await collection.find(findQuery);
            await cursor.forEach(college => {
                collegesList.push(JSON.parse(JSON.stringify(college)));
            });
    
        } catch (err){
            console.error(`Something went wrong trying to find the documents: ${err}\n`);
        }

        var resp = {
            colleges: collegesList
        }
        return resp;
    },

    /**
     * Runs a query to MongoDB to retrieve the college with
     * the specified college id. 
     * @param {String} The college's id number
     * @returns { JSON } A JSON object of the college. See 
     * ./model/README.md for the expected structure of the JSON objects.        
     */
    findCollege : async function(id) {
        // Initiates the response object:
        var resp = {};
        const dbName = "EduNavi";
        const collectionName = "College";
    
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        const findQuery = { College_ID: Number(id) };
        try{
            const cursor = await collection.find(findQuery);
            await cursor.forEach(college => {
                resp = (JSON.parse(JSON.stringify(college)));
            });
    
        } catch (err){
            console.error(`Something went wrong trying to find the documents: ${err}\n`);
        }

        return resp;
    },

    /**
     * Runs a query to MongoDB to retrieve the course with
     * the specified course id. 
     * @param {String} The course's id number
     * @returns { JSON } A JSON object of the course. See 
     * ./model/README.md for the expected structure of the JSON objects.        
     */
    getCourse : async function (courseID) {
        // Initiates the response object:
        var resp = {};
        const dbName = "EduNavi";
        const collectionName = "Courses";
    
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        const findQuery = { Course_ID: Number(courseID) };
        try{
            const cursor = await collection.find(findQuery);
            await cursor.forEach(course => {
                resp = (JSON.parse(JSON.stringify(course)));
            });
    
        } catch (err){
            console.error(`Something went wrong trying to find the documents: ${err}\n`);
        }

        return resp;
    },

    /**
     * Runs a query to MongoDB to retrieve all courses associated 
     * with a college and program.
     * @param {String} The college's id number
     * @param {String} The program number (see ./model/README.md) for
     * more information regarding the types of programs.
     * @returns { JSON } A JSON object containing a list of all courses
     * associated with the given college and program. See ./model/README.md 
     * for the expected structure of the JSON objects.        
     */
    getCourses : async function (collegeID, programID){
        // Initiates the response object:
        var courseList = [];
        const dbName = "EduNavi";
        const collectionName = "Courses";
    
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
    
        const findQuery = { College_ID : Number(collegeID), Program_ID: Number(programID) };
        try{
            const cursor = await collection.find(findQuery);
            await cursor.forEach(course => {
                courseList.push(JSON.parse(JSON.stringify(course)));
            });
    
        } catch (err){
            console.error(`Something went wrong trying to find the documents: ${err}\n`);
        }

        var resp = {
            courses: courseList
        }
        return resp;
    }

}