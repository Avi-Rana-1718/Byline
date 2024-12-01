const {MongoClient} = require("mongodb");
const URL = process.env.CONNECTION_URL;

async function updateUser(userObj) {
    try {
        let client = new MongoClient(URL);
        await client.connect();
        let db = client.db("twitter");
        let collection = db.collection("userData");

        // let accountExists = await collection.updateOne({email: userObj.email, password: userObj.password});
        // if(accountExists!=null) {
        //     delete accountExists.password;
        //     return {status: "SUCCESS", data: accountExists};
        // } else {
        //     return {status: "ERROR", message: "Unabel to find user with the provided credentials!"}
        // }
    } catch (err) {
        console.log(err);
        
    }
}

module.exports = updateUser;