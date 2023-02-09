const express = require("express");
const router = express.Router();

const postsRoutes = require("./postRoutes");
router.use("/posts", postsRoutes);

module.exports = router;
