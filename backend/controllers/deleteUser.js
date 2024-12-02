const {MongoClient, ObjectId} = require("mongodb");
const URL = process.env.CONNECTION_URL;

async function deleteUser(id) {
    try {
        let client = new MongoClient(URL);
        await client.connect();
        let db = client.db("twitter");
        let collection = db.collection("userData");
        console.log(id);
        
        let accountExists = await collection.deleteOne({userID: Number(id)});

        console.log(accountExists);
        
        if(accountExists.deletedCount==0) {
            return {status: "ERROR", message: "User not found!"};
        } else {
            return {status: "SUCCESS"}
        }
        
    } catch (err) {
        console.log(err); 
    }
}

module.exports = deleteUser;