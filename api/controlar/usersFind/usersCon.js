const User = require("../../modules/usermoduels");
exports.getAllusers = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      message: "Somtingi went wrong",
    });
  }
};
