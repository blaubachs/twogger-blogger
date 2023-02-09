const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get req from /api/posts");
});

module.exports = router;
