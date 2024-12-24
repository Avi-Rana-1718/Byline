const mongoose = require("mongoose")
const URL = process.env.CONNECTION_URL;

async function addPost(postObj) {
    try {
        await mongoose.connect(URL);
        let client = new MongoClient(URL);
        let db = client.db("twitter");
        let postCollection = db.collection("postData");
        let userCollection = db.collection("userData");


        let postSent = await postCollection.insertOne(postObj);        

        let userUpdated = await userCollection.updateOne({userID: Number(postObj.authorID)}, {$push: {posts: Number(postObj.postID)}})
        console.log(userUpdated);
        console.log(postSent)
        
        if(postSent!=null & userUpdated.modifiedCount==1) {
            return {status: "SUCCESS", data: [postObj, userUpdated]};
        } else {
            return {status: "ERROR", message: "Unable to send post!"};
        }
        client.close()

    } catch (err) {
        console.log(err);
    }
}

module.exports = addPost;