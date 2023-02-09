const sequelize = require("../config/connection");
const userSeeds = require("./userSeeds");
const postSeeds = require("./postSeeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n....Seeding into Users....\n");
  await userSeeds();
  console.log("\n....Seeding into Posts....\n");
  await postSeeds();

  process.exit(0);
};

seedAll();
