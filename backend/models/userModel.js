const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECTION_URL).then(()=>{
    console.log("Connected");
    
});

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number,
        default: ()=> Date.now()
    },
    userPfp: {
        type: String,
        default: "https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg"
    },
    userID: {
        type: Number,
        default: ()=> Math.floor(Math.random() * (999999999 - 111111111) + 111111111),
    },
    posts: []
})

module.exports = mongoose.model("User", userSchema)
