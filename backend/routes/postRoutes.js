const express = require("express");
const router = express.Router();

const getPost = require("../controllers/getPost");
const addPost = require("../controllers/addPost");

router.get("/get", async (req, res)=>{
    res.json(await getPost(req.query.id));
})
router.post("/add", async (req, res)=>{
    res.json(await addPost(req.body));
})

module.exports = router;