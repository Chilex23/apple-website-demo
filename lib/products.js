import fs from "fs";
import path from "path";

const categoriesDirectory = path.join(process.cwd(), "category");
const filePath = path.join(categoriesDirectory, "categories.json");

export function getTopProducts() {
  const contents = fs.readFileSync(filePath, "utf-8");
  const parsed = JSON.parse(contents);
  return parsed.topProducts;
}
