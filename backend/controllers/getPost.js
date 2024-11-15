const {MongoClient, ObjectId} = require("mongodb");
const URL = "mongodb+srv://avirana3449:wBnxTbZxPcJrH2zw@cluster0.lgdme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function getPost(id) {
    try {
        let client = new MongoClient(URL);
        let db = client.db("twitter");
        let collection = db.collection("postData");
        console.log(id);
        
        let postExist = await collection.findOne({postID: Number(id)});
        console.log(postExist);
        
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