const { loginCon } = require("../../controlar/author/authorContro");

const login = require("express").Router();

// Sin Up
login.post("/", loginCon);

module.exports = login;
