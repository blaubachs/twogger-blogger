const express = require("express");
const router = express.Router();
const { User, Post, Comment } = require("../../models");

router.get("/", async (req, res) => {
  const postData = await Post.findAll({ include: [User, Comment] });
  res.json(postData);
});
router.post("/", async (req, res) => {});
module.exports = router;
