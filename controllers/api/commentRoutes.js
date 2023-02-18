const express = require("express");
const router = express.Router();
const { User, Post, Comment } = require("../../models");

// routes for creating a comment or getting a comment to be created here.

router.get("/", async (req, res) => {
  const allComments = await Comment.findAll();
  res.json(allComments);
});

router.post("/:id", async (req, res) => {
  // create a comment, the post req from the front end needs to grab the id of the post from the DOM.
  const createComment = await Comment.create({
    comment_text: req.body.comment_text,
    PostId: req.params.id,
  });
  if (!createComment) {
    res.status(500).json({ msg: "An error occurred!" });
  } else {
    res.status(200).json(createComment);
  }
});

module.exports = router;
