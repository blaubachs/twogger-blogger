const express = require("express");
const router = express.Router();
const { User, Post, Comment } = require("../../models");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.send("user route");
});

router.post("/", async (req, res) => {
  const createUser = await User.create({
    username: req.body.username,
    password: req.body.password,
  });
  req.session.UserId = createUser.UserId;
  req.session.username = createUser.username;
  res.json(createUser);
});

router.get("/:id", async (req, res) => {
  const findOneUser = await User.findByPk(req.params.id);

  res.json(findOneUser);
});

module.exports = router;
