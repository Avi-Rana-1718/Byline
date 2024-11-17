const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors")
const PORT = 3030;

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes")


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}))

app.use("/auth", authRoutes);
app.use("/post", postRoutes);
app.use("/", userRoutes);

app.get("/", (req, res)=>{
    res.send("/");
});




app.listen(PORT);