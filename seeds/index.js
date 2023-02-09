const userSeeds = require("./userSeeds");
const postSeeds = require("./postSeeds");

const seedAll = async () => {
  console.log("\n....Seeding into Users....\n");
  await userSeeds();
  console.log("\n....Seeding into Posts....\n");
  await postSeeds();
};
