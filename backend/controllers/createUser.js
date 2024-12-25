const userModel = require("../models/userModel");

async function createUser(userObj) {
  try {
    const accountExists = await userModel.exists({ email: userObj.email });

    if (!accountExists) {
      await userModel.create(userObj);
      return { status: "SUCCESS", data: userObj };
    } else {
      return { status: "ERROR", message: "User already exists!" };
    }
  } catch (err) {
    console.error(err); // Log the error with .error for better visibility
    throw err; // Re-throw the error to indicate a problem
  }
}

module.exports = createUser;
