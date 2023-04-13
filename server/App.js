const http = require("http");
const app = require("express");
const { MongoClient } = require('mongodb');

const host = 'localhost';
const port = 8000;
const uri = 'mongodb+srv://kindler:<password>@edunavi.s1g7ove.mongodb.net/?retryWrites=true&w=majority'

// TODO: remove plain-text username and password from here...
const client = new MongoClient('mongodb+srv://kindler:OPvfzEottKn9bRP3@edunavi.s1g7ove.mongodb.net/test');


const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

async function run() {
    const dbName = "EduNavi";
    const collectionName = "College";

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const findQuery = { Name: "Rensselaer Polytechnic Institute" };
    try{
        const cursor = await collection.find(findQuery);
        await cursor.forEach(college => {
            console.log(`${college.Name} has ranking of ${college.USNews_Rank}.`);
          });

    } catch (err){
        console.error(`Something went wrong trying to find the documents: ${err}\n`);
    }
}

// Starts the server...
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    run().catch(console.dir);
    console.log(`Server is running on http://${host}:${port}`);
});