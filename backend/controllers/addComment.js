const {MongoClient } = require("mongodb");
const URL = process.env.CONNECTION_URL;

async function addComment(commentObj) {
    console.log(commentObj);
    
    try {
        let client = new MongoClient(URL);
        let db = client.db("twitter");
        let postCollection = db.collection("postData");
        let commentCollection = db.collection("commentData");

        let postUpdated = await postCollection.updateOne({postID: Number(commentObj.postID)}, {$push: {comments: commentObj}});
        console.log(postUpdated);
        
        if(postUpdated!=null) {
            let commentAdd = await commentCollection.insertOne(commentObj)
            console.log(commentAdd);
            
           return {status: "SUCCESS"};
        } else {
            return {status: "ERROR", message: "Unable to find post with the postID."}
        }
    } catch(err) {
        console.log(err);
        
    }
}

module.exports = addComment;