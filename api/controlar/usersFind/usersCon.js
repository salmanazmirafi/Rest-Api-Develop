const User = require("../../modules/usermoduels");
const bcryp = require("bcrypt");
// get all user
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
// Update profile

exports.updateUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        message: "Worng user",
      });
    }
    req.body.password = await bcryp.hash(req.body.password, 11);
    const updat = await User.findByIdAndUpdate(userId, req.body, { new: true });
    res.status(200).json({
      message: "Your Profile Update Seccess",
      updat,
    });
  } catch (error) {
    res.status(400).json({
      message: "You can update only your account",
    });
  }
};
// Delete User

exports.deleteUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "Wrong User",
      });
    }
    const userDelet = await User.findByIdAndDelete(userId);
    res.status(200).json({
      message: "User Seccessfule Delete",
      userDelet,
    });
  } catch (error) {
    res.status(401).json({
      message: "You can deleted only your account",
    });
  }
};
