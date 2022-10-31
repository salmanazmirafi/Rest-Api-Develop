const User = require("../../modules/usermoduels");
const bcrypt = require("bcrypt");

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
