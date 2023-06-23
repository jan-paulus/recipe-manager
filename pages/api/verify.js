// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";

export default function hello(req, res) {
  const recipeDirPath = path.join(
    process.env.HOST_VOLUME_PATH,
    process.env.RECIPE_DIRECTORY_PATH
  );

  const result = fs.readdirSync(recipeDirPath);
  res.status(200).json(JSON.stringify(result));
}
