const { getAllusers } = require("../../controlar/usersFind/usersCon");

const userRout = require("express").Router();

userRout.get("/", getAllusers);

module.exports = userRout;
