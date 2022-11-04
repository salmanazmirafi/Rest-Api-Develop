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
      message: "something Went Wrong",
      error,
    });
  }
};
// Get All Post
exports.getAllPost = async (req, res, next) => {
  const { username, category } = req.query;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (category) {
      posts = await Post.find({
        category: {
          $in: [category],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(401).json({
      message: "Somthing went wrong",
    });
  }
};
// Update Post
exports.postUpdate = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(401).json({
        message: "Post Not Found",
      });
    }
    const updatePosts = await Post.findByIdAndUpdate(postId, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Post Update Success",
      updatePosts,
    });
  } catch (error) {
    res.status(401).json({
      message: "Your can Update your account",
      error,
    });
  }
};
// Delete Post
exports.postDeleted = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(401).json({
        message: "Post Not Found",
      });
    }
    await Post.findByIdAndDelete(postId);
    res.status(200).json({
      message: "Post Delete Success",
    });
  } catch (error) {
    res.status(401).json({
      message: "Your can Delete your account",
      error,
    });
  }
};
// get single Post
exports.getsinglePost = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const post = await Post.findById(postId);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({
      message: "Somthig Went wrong",
    });
  }
};
