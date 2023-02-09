const express = require("express");
const router = express.Router();
const { User, Post } = require("../../models");

router.get("/", async (req, res) => {
  const postData = await Post.findAll({ include: [User] });
  res.json(postData);
});

module.exports = router;
