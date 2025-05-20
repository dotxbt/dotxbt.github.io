import { ProductService } from "./product_service.js";
import ProductItem from "./ProductItem.js";

const ProductSection = (path) => {
  const c = document.createElement("div");
  c.id = "product-container";
  c.className =
    "m-auto max-w-7xl grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 p-3 md:p-4 transition-all ease-in-out duration-1000 items-center w-full justify-center min-h-screen";

  new ProductService().getProducts(path)
    .then((data) => {
      c.innerHTML = "";
      if (data.length === 0) {
        c.innerHTML =
          "<div class='w-full h-full flex flex-col items-center justify-center'>No Products Found</div>";
        return;
      }
      c.innerHTML = "";
      data.forEach((product) => {
        c.appendChild(ProductItem(product));
      });
    });
  return c;
};

export default ProductSection;
