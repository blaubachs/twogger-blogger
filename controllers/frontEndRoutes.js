const express = require("express");
const router = express.Router();
const { User, Post, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User, Comment],
    });
    const hbsPost = postData.map((post) => post.toJSON());
    console.log(hbsPost);
    res.render("home", {
      allPosts: hbsPost,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("an error occurred");
  }
});

router.get("/sessions", (req, res) => {
  res.json(req.session);
});

router.get("/login", (req, res) => {
  res.render("login");
});
module.exports = router;
