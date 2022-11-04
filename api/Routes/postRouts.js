const {
  createPost,
  getAllPost,
  postUpdate,
  postDeleted,
} = require("../controlar/postControlar/postCon");
const { authMedalware } = require("../middlewares/author");

const postRoute = require("express").Router();

postRoute.post("/", authMedalware, createPost);
postRoute.get("/", getAllPost);
postRoute.put("/update/:postId", authMedalware, postUpdate);
postRoute.delete("/update/:postId", authMedalware, postDeleted);

module.exports = postRoute;
