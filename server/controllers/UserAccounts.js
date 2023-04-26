const { MongoClient } = require('mongodb');
var Keys = require('./Keys');

const client = new MongoClient(Keys.getMongoClientKey());

// TODO: Make a private function that will execute a query and return an 
//       appropriate response object (less code to look through).
module.exports = {

    /**
     * Runs a query to MongoDB to retrieve all cusers
     * with that college name. 
     * @param {string} The exact name of the user.
     * @returns { JSON } A JSON object that contains a list 
     * of every colleges found. See ./model/README.md for the
     * expected structure of the JSON objects.        
     */
    findUser : async function(userEmail) {
        var userList = [];
        const dbName = "EduNavi";
        const collectionName = "Users";
    
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
    
        const findQuery = { Email: userEmail };
        try{
            const cursor = await collection.find(findQuery);
            await cursor.forEach(user => {
                // TODO: Return this as a response...
                console.log(user);
                userList.push(JSON.parse(JSON.stringify(user)));
            });
    
        } catch (err){
            console.error(`Something went wrong trying to find the documents: ${err}\n`);
        }

        var resp = {
            users: userList
        }
        console.log(resp);
        return resp;
    },

    registerUser : async function(name, userEmail, password) {
        const dbName = "EduNavi";
        const collectionName = "Users";

        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        var document = {}
        try {
        
            document = { Email: userEmail, FullName: name, Password: password }
            collection.insertOne(document, function(err, res) {
                if (err) throw err;
            });
        } catch (err) {
            console.error('Error when insterting documents');
        }
        var resp = {
            Document: document
        }
        console.log(resp);
        return resp;
    }
}


function registerUser(name, userEmail, password) {
    const dbName = "EduNavi";
    const collectionName = "Users";

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    var document = {}
    try { 
        document = { Email: userEmail, FullName: name, Password: password }
        console.log(document);
        collection.insertOne(document);
    } catch (err) {
        console.error('Error when insterting documents');
    }
    var resp = {
        Document: document
    }
    console.log(resp);
    return resp;
}

