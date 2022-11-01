const User = require("../modules/usermoduels");
const jwt = require("jsonwebtoken");

exports.authMedalware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        message: "Access not allow",
      });
    }
    const stoken = token.split(" ")[1];
    const dcomde = jwt.verify(stoken, process.env.PRIVET_KEY);
    const id = dcomde.id;
    const user = await User.findById(id);
    res.user = user;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Authanticad Faill",
    });
  }
};
