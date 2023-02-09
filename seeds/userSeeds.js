const { Post } = require("../models");

const postData = [
  {
    title: "Super Cool Post",
    post_text: "This is the text for the super cool post",
    user_id: 2,
  },
  {
    title: "Another Post!",
    post_text: "This is the text for another post, but from a different user",
    user_id: 1,
  },
  {
    title: "This post is the coolest post though",
    post_text:
      "The reason this post is the coolest is because user3 created it.",
    user_id: 3,
  },
];

const seedPosts = () => User.bulkCreate(postData);

module.exports = seedPosts;
