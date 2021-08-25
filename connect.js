const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = "mongodb+srv://dbSleepy:khunglongno1@cluster0.n6zo6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true });
// Use connect method to connect to the Server


client.connect(err => {
    console.log('sucess');
});
module.exports = client;




// async function main() {
//     const uri = "mongodb+srv://dbSleepy:khunglongno1@cluster0.n6zo6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//     const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();

//         // Make the appropriate DB calls
//         // await listDatabases(client);
//         // await getData(client);


//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }
// main().catch(console.error);

// async function listDatabases(client) {
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));

// };

// async function getData(client) {

// }