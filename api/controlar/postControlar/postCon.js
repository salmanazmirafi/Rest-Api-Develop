const Post = require("../../modules/postModules");
// Create Post

exports.createPost = async (req, res, next) => {
  const { title, body, username, category, photo } = req.body;
  try {
    const post = await Post.create({
      title,
      body,
      username,
      category,
      photo,
    });
    res.status(201).json({ post });
  } catch (error) {
    res.status(404).json({
      message: "Somthing Went Wrong",
      error,
    });
  }
};
// Update Post
// Delete Post
