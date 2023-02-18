const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comments");

Post.belongsTo(User, {
  onDelete: "Cascade",
});
User.hasMany(Post);

Comment.belongsTo(Post);

Post.hasMany(Comment);

module.exports = {
  User,
  Post,
};
