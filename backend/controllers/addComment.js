const commentModel = require("../models/commentModel");
const postModel = require("../models/postModel");

async function addComment(commentObj) {
    try {

        let postUpdated = await postModel.updateOne({postID: Number(commentObj.postID)}, {$push: {comments: commentObj}});
        
        if(postUpdated!=null) {
            let commentAdd = await commentModel.create(commentObj)
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