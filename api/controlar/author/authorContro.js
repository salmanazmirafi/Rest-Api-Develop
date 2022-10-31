const User = require("../../modules/usermoduels");

exports.singnCon = async (req, res, next) => {
  const { name, username, email, password, profile } = req.body;

  try {
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
