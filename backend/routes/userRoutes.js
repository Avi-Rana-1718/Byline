const express = require("express");
const router = express.Router()

const getUser = require("../controllers/getUser");
const deleteUser = require("../controllers/deleteUser")


router.get("/getUser", async (req, res)=>{
    res.json(await getUser(req.query.id));
})
router.get("/deleteUser", async (req, res)=>{
    res.json(await deleteUser(req.query.id));
})
module.exports = router;