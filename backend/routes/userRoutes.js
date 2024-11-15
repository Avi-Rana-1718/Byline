const express = require("express");
const getUser = require("../controllers/getUser");
const router = express.Router()

router.get("/getUser", async (req, res)=>{
    res.json(await getUser(req.query.id));
})
module.exports = router;