const express = require("express");
const router = express.Router();

const createUser = require("../controllers/createUser");
const authUser = require("../controllers/authUser");
const deleteUser = require("../controllers/deleteUser")

router.post("/signup" , async (req, res)=>{
    res.json(await createUser(req.body))
})
router.post("/login", async (req, res)=>{
    let response = await authUser(req.body)
    req.session.auth = response.data;
    res.json(response);
})
router.get("/delete", async (req, res)=>{
    res.json(await deleteUser(req.query.id));
})
router.get("/verify", async (req, res)=>{
    if(req.session.auth) {
        res.json({status:"SUCCESS", data: req.session.auth});
    } else {
        res.json({status:"ERROR", message: "User not authenticated!"});
    }
})


module.exports = router;