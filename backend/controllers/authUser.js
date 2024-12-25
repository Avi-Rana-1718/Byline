const userModel = require("../models/userModel");

async function authUser(userObj) {
  try {
    let accountExists = await userModel.exists({
      email: userObj.email,
      password: userObj.password,
    });
    if (accountExists) {
      return { status: "SUCCESS", data: await userModel.findOne({email: userObj.email})};
    } else {
      return {
        status: "ERROR",
        message: "Unable to find user with the provided credentials!",
      };
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = authUser;
