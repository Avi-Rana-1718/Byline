const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECTION_URL).then(()=>{
    console.log("Connected!"); 
});

let commentSchema = new mongoose.Schema({
    postID: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    authorID: {
        type: String,
        required: true
    },
    commentID: {
        type: Number,
        default: ()=>Math.floor(Math.random() * (999999999 - 111111111) + 111111111)
    },
    postedAt: {
        type: Number,
        default: ()=> Date.now()
    }
});

module.exports = mongoose.model("Comment", commentSchema);