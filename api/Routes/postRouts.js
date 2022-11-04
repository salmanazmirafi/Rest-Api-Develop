const {
  createPost,
  getAllPost,
} = require("../controlar/postControlar/postCon");
const { authMedalware } = require("../middlewares/author");

const postRoute = require("express").Router();

postRoute.post("/", authMedalware, createPost);
postRoute.get("/", getAllPost);

module.exports = postRoute;
