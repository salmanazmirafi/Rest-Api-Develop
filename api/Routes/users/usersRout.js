const {
  getAllusers,
  updateUser,
} = require("../../controlar/usersFind/usersCon");
const { authMedalware } = require("../../middlewares/author");

const userRout = require("express").Router();

userRout.get("/", authMedalware, getAllusers);
userRout.put("/:userId", authMedalware, updateUser);

module.exports = userRout;
