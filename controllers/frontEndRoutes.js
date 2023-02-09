const express = require("express");
const router = express.Router();
const { User, Post } = require("../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({ include: [User] });
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

module.exports = router;
