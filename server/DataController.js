const { MongoClient } = require('mongodb');

// TODO: remove plain-text username and password from here...
const client = new MongoClient('mongodb+srv://kindler:OPvfzEottKn9bRP3@edunavi.s1g7ove.mongodb.net/test');

module.exports = {
    // Finds the college with the given college name
    findCollege : async function(collegeName) {
        const dbName = "EduNavi";
        const collectionName = "College";
    
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
    
        const findQuery = { Name: collegeName };
        try{
            const cursor = await collection.find(findQuery);
            await cursor.forEach(college => {
                // TODO: Return this as a response...
                console.log(JSON.stringify(college));
            });
    
        } catch (err){
            console.error(`Something went wrong trying to find the documents: ${err}\n`);
        }
    }

}