const postModel = require("../models/postModel")

async function getPost(id) {
    try {
        let postExist = await postModel.findOne({postID: Number(id)});
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