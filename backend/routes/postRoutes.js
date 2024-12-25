const express = require("express");
const router = express.Router();

const getPost = require("../controllers/getPost");
const addPost = require("../controllers/addPost");
const addComment = require("../controllers/addComment");
const deletePost = require("../controllers/deletePost");

router.get("/get", async (req, res)=>{
    res.json(await getPost(req.query.id));
})
router.post("/add", async (req, res)=>{
    res.json(await addPost(req.body));
})

router.post("/comment/add", async (req, res)=>{
    res.json(await addComment(req.body));
})

router.get("/delete", async (req, res)=>{
    res.json(await deletePost(req.query.id))
})

module.exports = router;