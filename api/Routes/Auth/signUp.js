const { singnCon } = require("../../controlar/author/authorContro");

const sinUp = require("express").Router();

// Sin Up
sinUp.post("/", singnCon);
// Log In

module.exports = sinUp;
