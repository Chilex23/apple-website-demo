import fs from "fs";
import path from "path";

const categoriesDirectory = path.join(process.cwd(), "category");
const filePath = path.join(categoriesDirectory, "categories.json");

// Getting the categories from the filesystem
export function getCategories() {
  const contents = fs.readFileSync(filePath, "utf-8");
  const parsed = JSON.parse(contents);
  return parsed.category;
}

export function getAllCategoriesIds() {
  const contents = fs.readFileSync(filePath, "utf-8");
  const parsed = JSON.parse(contents);
  return parsed.category.map((category) => {
    return {
      params: { id: category.id },
    };
  });
}

export async function getCategoryData(id) {
  const contents = fs.readFileSync(filePath, "utf-8");
  const parsed = JSON.parse(contents);
  const item = parsed.category.find((el) => el.id == id);
  // Combine the data with the id
  return {
    id,
    ...item,
  };
}
