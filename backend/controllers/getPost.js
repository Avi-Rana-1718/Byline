const {MongoClient, ObjectId} = require("mongodb");
const URL = process.env.CONNECTION_URL;

async function getPost(id) {
    try {
        let client = new MongoClient(URL);
        let db = client.db("twitter");
        let collection = db.collection("postData");

        let postExist = await collection.findOne({postID: Number(id)});
        if(postExist==null) {
            return {status: "ERROR", message: "Post not found!"};
        } else {
            return {status: "SUCCESS", data: postExist}
        }
        
    } catch(err) {
        console.log(err);
        
    }
}

module.exports = getPost;