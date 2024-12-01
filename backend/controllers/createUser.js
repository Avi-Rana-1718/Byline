const {MongoClient} = require("mongodb");
const URL = process.env.CONNECTION_URL;

async function createUser(userObj) {
    let client = new MongoClient(URL);
    try {
        await client.connect();
        let db = client.db("twitter");
        let collection = db.collection("userData");
        
        let accountExists = await collection.findOne({email: userObj.email});
        
        if(accountExists==null) {
            console.log(userObj);
            
            collection.insertOne(userObj)
            //delete userObj.password;
            return {status: "SUCCESS", data: userObj};
        } else {
            return {status: "ERROR", message: "User already exists!"}
        }

    } catch(err) {
        console.log(err);
    }

    return -1;
}

module.exports = createUser;