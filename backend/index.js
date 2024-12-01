const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors")
const PORT = 3030;
require('dotenv').config();

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes")



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    credentials: true
}))
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}))

app.use("/auth", authRoutes);
app.use("/post", postRoutes);
app.use("/", userRoutes);

app.get("/", (req, res)=>{
    res.send("/");
});




app.listen(PORT);