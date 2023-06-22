// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";

export default function test(req, res) {
  if (fs.existsSync(`recipes`)) {
    fs.writeFileSync(`recipes/${+new Date()}.md`, "cool");
    res.status(200).json({ name: "Success" });
  }
  res.status(200).json({ name: "Failed" });
}
