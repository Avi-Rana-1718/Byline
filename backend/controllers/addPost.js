const postModel = require("../models/postModel")
const userModel = require("../models/userModel")

async function addPost(postObj) {
    try {

        let postAdded = await postModel.create(postObj);        

        let userUpdated = await userModel.updateOne({userID: Number(postObj.authorID)}, {$push: {posts: Number(postObj.postID)}})
        console.log(userUpdated);
        console.log(postAdded)
        
        if(postAdded && userUpdated.modifiedCount==1) {
            return {status: "SUCCESS", data: [postObj, userUpdated]};
        } else {
            return {status: "ERROR", message: "Unable to send post!"};
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = addPost;