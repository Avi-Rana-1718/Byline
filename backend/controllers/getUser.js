const userModel = require("../models/userModel")

async function getUser(id) {
    try {
        

        let accountExists = await userModel.findOne({userID: Number(id)});
        console.log(accountExists)
        
        if(accountExists) {
            return {status: "SUCCESS", data: accountExists};
        } else {
            return {status: "ERROR", message: "Unable to find user with the provided credentials!"}
        }
    } catch (err) {
        console.log(err);
        
    }
}

module.exports = getUser;