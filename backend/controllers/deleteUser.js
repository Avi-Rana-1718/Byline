const userModel = require("../models/userModel")

async function deleteUser(id) {
    try {
    
        let accountExists = await userModel.deleteOne({userID: Number(id)});

        console.log(accountExists);
        
        if(accountExists.deletedCount==0) {
            return {status: "ERROR", message: "User not found!"};
        } else {
            return {status: "SUCCESS"}
        }
        
    } catch (err) {
        console.log(err); 
    }
}

module.exports = deleteUser;