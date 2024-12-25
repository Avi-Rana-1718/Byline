const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECTION_URL).then(() => {
  console.log("Connected!");
});

let postSchema = new mongoose.Schema({
  authorID: {
    type: Number,
    required: true // This should be a boolean value
  },
  title: {
    type: String,
    required: true
  },
  byline: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  postID: {
    type: Number,
    default: () => Math.floor(Math.random() * (999999999 - 111111111) + 111111111),
  },
  postedAt: {
    type: Number,
    default: () => Date.now(),
  },
  comments: [],
});

module.exports = mongoose.model("Post", postSchema);