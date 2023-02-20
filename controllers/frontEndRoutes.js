const express = require("express");
const router = express.Router();
const { User, Post, Comment } = require("../models");

// This route gets all posts and their related data to render to the page on page load.
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

// This route finds one user and their related data to render to the page on page load.
router.get("/dashboard", async (req, res) => {
  if (!req.session.UserId) {
    res.redirect("/signup");
  } else {
    const user = await User.findOne({
      where: {
        username: req.session.username,
      },
      include: {
        model: Post,
        include: {
          model: Comment,
        },
      },
    });

    if (!user) {
      res.redirect("/signup");
    } else {
      const userHbsData = user.toJSON();
      console.log(userHbsData);
      res.render("dashboard", userHbsData);
    }
  }
});

// ! Not necessary for deployment.
// router.get("/sessions", (req, res) => {
//   res.json(req.session);
// });

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
