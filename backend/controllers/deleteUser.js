const {MongoClient, ObjectId} = require("mongodb");
const URL = "mongodb+srv://avirana3449:wBnxTbZxPcJrH2zw@cluster0.lgdme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function deleteUser(id) {
    try {
        let client = new MongoClient(URL);
        await client.connect();
        let db = client.db("twitter");
        let collection = db.collection("userData");
    
        let accountExists = await collection.deleteOne({id: id});

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