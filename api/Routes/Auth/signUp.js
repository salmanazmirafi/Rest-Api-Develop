const { singnCon } = require("../../controlar/author/authorContro");

const sinUp = require("express").Router();

sinUp.post("/", singnCon);

module.exports = sinUp;
