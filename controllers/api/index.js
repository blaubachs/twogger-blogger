const express = require("express");
const router = express.Router();

const postsRoutes = require("./postRoutes");
router.use("/posts", postsRoutes);

const userRoutes = require("./userRoutes");
router.use("/users", userRoutes);

const commentRoutes = require("./commentRoutes");
router.use("/comments", commentRoutes);

module.exports = router;
