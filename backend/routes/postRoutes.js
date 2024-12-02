const express = require("express");
const router = express.Router();

const getPost = require("../controllers/getPost");
const addPost = require("../controllers/addPost");
const addComment = require("../controllers/addComment");

router.get("/get", async (req, res)=>{
    res.json(await getPost(req.query.id));
})
router.post("/add", async (req, res)=>{
    res.json(await addPost(req.body));
})

router.post("/comment/add", async (req, res)=>{
    res.json(await addComment(req.body));
})

module.exports = router;