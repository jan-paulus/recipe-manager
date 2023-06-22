// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";

export default function hello(req, res) {
  const result = fs.readdirSync("recipes/");
  res.status(200).json(JSON.stringify(result));
}
