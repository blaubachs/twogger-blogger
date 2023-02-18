const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Wow, what a cool comment this is!",
    PostId: 2,
  },
  {
    comment_text: "Man, all these comments are so neat",
    PostId: 1,
  },
  {
    comment_text: "Nice! Another comment on one post? Whoa!",
    PostId: 1,
  },
  {
    comment_text: "Hey check it out, this comment is on post 3 B)",
    PostId: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
