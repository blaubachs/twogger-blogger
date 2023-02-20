const express = require("express");
const { where } = require("sequelize");
const router = express.Router();
const { User, Post, Comment } = require("../../models");

router.get("/", async (req, res) => {
  const postData = await Post.findAll({ include: [User, Comment] });
  res.json(postData);
});

router.post("/", async (req, res) => {
  if (!req.session.UserId) {
    res.status(401).json({ msg: "Cannot post without being signed in" });
  } else {
    const newPost = await Post.create({
      title: req.body.title,
      post_text: req.body.post_text,
    });
    const user = await User.findByPk(req.session.UserId);

    await user.addPost(newPost.id);
    console.log(newPost);
    console.log(user);
    res.json({ msg: "check server console" });
  }
});
// TODO: Delete request to remove posts
router.delete("/:id", async (req, res) => {
  if (!req.session.UserId) {
    res.status(401).json({ msg: "must be logged in to remove a post" });
  } else {
    const findPost = await Post.findByPk(req.params.id);
    if (!findPost) {
      return res.status(404).json({ msg: "No post by that id" });
    } else if (findPost.UserId !== req.session.UserId) {
      return res.status(403).json({ msg: "Not your post" });
    }

    const deletePost = await Post.delete({
      where: {
        PostId: req.params.id,
      },
    });
    if (!deletePost) {
      res
        .status(500)
        .json({ msg: "an error occurred while deleting the post" });
    } else {
      res.json(deletePost);
    }
  }
});

module.exports = router;
