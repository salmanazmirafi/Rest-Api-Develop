const User = require("../../modules/usermoduels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Sign Up

exports.singnCon = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 11);
    const { name, username, email, password, profile } = req.body;
    const user = await User.create({
      name,
      username,
      email,
      password,
      profile,
    });
    res.status(201).json({
      message: `Hello! ${name} acount has been created!`,
      user,
    });
  } catch (error) {
    res.status(401).json({
      message: "Somthing went wrong",
    });
  }
};

// Log In

exports.loginCon = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({
        message: "User Not Find",
      });
    }

    const validated = await bcrypt.compare(password, user.password);
    if (!validated) {
      res.status(400).json({
        message: "Password is worng",
      });
    }
    const token = await jwt.sign(
      { username, _id: user._id },
      process.env.PRIVET_KEY,
      { expiresIn: "2h" }
    );
    res.status(200).json({
      message: "Login Seccessfull",
      token,
    });
  } catch (error) {
    res.status(404).json({
      message: "Not Found",
    });
  }
};

// Get All Users
