const express = require("express");
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

module.exports = router;
