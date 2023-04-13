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
                console.log(`${college.Name}: `);
                console.log(`Location: ${college.City}, ${college.State}`);
                console.log(`National Ranking: ${college.USNews_Rank}`);
                console.log(`State Ranking: ${college.State_Rank}`);
              });
    
        } catch (err){
            console.error(`Something went wrong trying to find the documents: ${err}\n`);
        }
    }

}