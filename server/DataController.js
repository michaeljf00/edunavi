const { MongoClient } = require('mongodb');
var Keys = require('./Keys');

// TODO: remove plain-text username and password from here...
const client = new MongoClient(Keys.getMongoClientKey());

module.exports = {
    // Finds the college with the given college name
    findColleges : async function(collegeName) {
        // Initiates the response object:
        var collegesList = [];
        const dbName = "EduNavi";
        const collectionName = "College";
    
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
    
        const findQuery = { Name: collegeName };
        try{
            const cursor = await collection.find(findQuery);
            await cursor.forEach(college => {
                // TODO: Return this as a response...
                console.log(college);
                collegesList.push(JSON.parse(JSON.stringify(college)));
            });
    
        } catch (err){
            console.error(`Something went wrong trying to find the documents: ${err}\n`);
        }

        var resp = {
            colleges: collegesList
        }
        console.log(resp);
        return resp;
    },

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