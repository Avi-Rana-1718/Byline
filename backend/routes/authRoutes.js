const express = require("express");
const router = express.Router();

const createUser = require("../controllers/createUser");
const authUser = require("../controllers/authUser");

router.post("/signup" , async (req, res)=>{
    res.json(await createUser(req.body))
})
router.post("/login", async (req, res)=>{
    let response = await authUser(req.body)
    //req.session.auth = response.data;
    console.log(req.session);
    
    res.json(response);
})
router.get("/verify", async (req, res)=>{
    if(req.session.auth) {
        res.json({status:"SUCCESS-Login", data: req.session.auth});
    } else {
        res.json({status:"ERROR", message: "Verify User not authenticated!"});
    }
})


module.exports = router;