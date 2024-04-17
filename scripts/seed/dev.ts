import db, { getId } from "../../src/modules/db";

const run = async () => {
  await db.post.createMany({
    data: [
      {
        id: getId(),
        slug: "ultimate-node-stack",
        title: "Ultimate Node Stack 2023",
        publishedAt: new Date(),
      },
      {
        id: getId(),
        slug: "draft-post",
        title: "Draft Post",
      },
    ],
  });
};

// Auto-run if main script (not imported)
if (require.main === module) {
  run().then(() => {
    console.log("Data seed complete");
    process.exit();
  });
}
