import path from "path";
import fs from "fs";

const categoriesDirectory = path.join(process.cwd(), "category");
const filePath = path.join(categoriesDirectory, "categories.json");

function getAllProducts() {
  const contents = fs.readFileSync(filePath, "utf-8");
  const parsed = JSON.parse(contents);
  const products = parsed.category.reduce((acc, el) => {
    return acc.concat(el.products);
  }, []);
  return products;
}

export function getTopProducts() {
  const contents = fs.readFileSync(filePath, "utf-8");
  const parsed = JSON.parse(contents);
  return parsed.topProducts;
}

export function getProduct(id) {
  const products = getAllProducts();
  return products.find((el) => el.id == id);
}

export function getAllProductsIds() {
  const products = getAllProducts();
  return products.map((product) => {
    return {
      params: { id: String(product.id) },
    };
  });
}
