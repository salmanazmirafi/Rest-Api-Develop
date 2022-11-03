const { createPost } = require("../controlar/postControlar/postCon");
const { authMedalware } = require("../middlewares/author");

const postRoute = require("express").Router();

postRoute.post("/", authMedalware, createPost);

module.exports = postRoute;
