const User = require("../models/userModel");

exports.registerUser = async (req, res) => {
  try {
    const userData = req.body;
    if (
      !userData.name ||
      !userData.email ||
      !userData.phone ||
      !userData.city ||
      !userData.state ||
      !userData.password
    ) {
      res.status(400).json({
        success: false,
        message: "please enter all the fields",
      });
    } else {
      const userExistsEmail = await User.findOne({ email: userData.email });
      const userExistsPhone = await User.findOne({ phone: userData.phone });

      if (userExistsEmail) {
        res.status(400).json({
          success: false,
          message: "email already exists",
        });
      } else if (userExistsPhone) {
        res.status(400).json({
          success: false,
          message: "phone number already exists",
        });
      } else {
        const user = await User.create(userData);
        if (user) {
          res.status(200).json({
            success: true,
            message: "user created successfully",
          });
        } else {
          res.status(400).json({
            success: false,
            message: "error registering the user",
          });
        }
      }
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
