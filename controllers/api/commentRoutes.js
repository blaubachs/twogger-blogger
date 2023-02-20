const express = require("express");
const router = express.Router();
const { User, Post, Comment } = require("../../models");

// Returns all comments
router.get("/", async (req, res) => {
  const allComments = await Comment.findAll();
  res.json(allComments);
});

// Takes in the id of the post, and then creates a comment attatched to the post.
router.post("/:id", async (req, res) => {
  // If the user is not logged in, it will be anonymous
  if (!req.session.username) {
    const createAnonymousComment = await Comment.create({
      comment_text: `Anonymous says: ${req.body.comment_text}`,
      PostId: req.params.id,
    });

    if (!createAnonymousComment) {
      res.status(500).json({ msg: "An error occurred!" });
    } else {
      res.status(200).json(createAnonymousComment);
    }
  } else {
    // If the user is logged in, their username will display
    const createUserComment = await Comment.create({
      comment_text: `${req.session.username} says: ${req.body.comment_text}`,
      PostId: req.params.id,
    });

    if (!createUserComment) {
      res.status(500).json({ msg: "An error occurred!" });
    } else {
      res.status(200).json(createUserComment);
    }
  }
});

module.exports = router;
