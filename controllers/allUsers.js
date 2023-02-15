const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users) {
      res.status(200).json({
        success: true,
        message: "all users fetched",
        users
      });
    } else {
      res.status(400).json({
        success: false,
        message: "error fetching users",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
