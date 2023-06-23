// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";

export default function test(req, res) {
  const recipeDirPath = path.join(
    process.env.HOST_VOLUME_PATH,
    process.env.RECIPE_DIRECTORY_PATH
  );

  if (fs.existsSync(recipeDirPath)) {
    fs.writeFileSync(path.join(recipeDirPath, `${+new Date()}.md`), "cool");
    res.status(200).json({ name: "Success" });
    return;
  }

  res.status(200).json({ name: "Failed" });
}
