const express = require("express");
const router = express.Router();
const { User, Post, Comment } = require("../../models");

// routes for creating a comment or getting a comment to be created here.

router.get("/", async (req, res) => {
  const allComments = await Comment.findAll();
  res.json(allComments);
});

module.exports = router;
