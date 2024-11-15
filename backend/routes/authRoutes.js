const express = require("express");
const router = express.Router();

const createUser = require("../controllers/createUser");
const authUser = require("../controllers/authUser");
const deleteUser = require("../controllers/deleteUser")

router.post("/signup" , async (req, res)=>{
    res.json(await createUser(req.body))
})
router.post("/login", async (req, res)=>{
    res.json(await authUser(req.body));
})
router.get("/delete", async (req, res)=>{
    res.json(await deleteUser(req.query.id));
})


module.exports = router;