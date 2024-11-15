const {MongoClient} = require("mongodb");
const URL = "mongodb+srv://avirana3449:wBnxTbZxPcJrH2zw@cluster0.lgdme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function getUser(id) {
    try {
        let client = new MongoClient(URL);
        await client.connect();
        let db = client.db("twitter");
        let collection = db.collection("userData");

        let accountExists = await collection.findOne({userID: Number(id)});
        
        if(accountExists!=null) {
            delete accountExists.password;
            delete accountExists.email;
            return {status: "SUCCESS", data: accountExists};
        } else {
            return {status: "ERROR", message: "Unable to find user with the provided credentials!"}
        }
    } catch (err) {
        console.log(err);
        
    }
}

module.exports = getUser;