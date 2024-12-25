const postModel = require("../models/postModel");
const commentModel = require("../models/postModel");

async function deletePost(id) {
    
    let deletedPost = await postModel.deleteOne(id);
    log(deletedPost);
}

module.exports = deletePost;