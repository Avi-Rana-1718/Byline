const userModel = require("../models/userModel");

async function createUser(userObj) {
  try {
    const accountExists = await userModel.exists({ email: userObj.email });
    //console.log(accountExists);

    console.log(await userModel.find());
    

    if (!accountExists) { // Check if account doesn't exist
      console.log(userObj);
  
      userModel.create(userObj).then(()=>{
        console.log("added");
      }).catch(err=>{
        console.log("err");
        
      })
      return { status: "SUCCESS", data: userObj };
    } else {
      return { status: "ERROR", message: "User already exists!" };
    }
  } catch (err) {
    console.error(err); // Log the error with `.error` for better visibility
    throw err; // Re-throw the error to indicate a problem
  }
}

module.exports = createUser;