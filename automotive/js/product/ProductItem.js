function ProductItem(product) {
  const c = document.createElement("div");
  c.className =
    "flex flex-col items-center justify-center bg-white rounded-2xl p-4 w-full";
  const i = document.createElement("img");
  i.src = product.image;
  i.alt = "Product Image";
  i.className =
    "w-full object-cover transition-all ease-in-out delay-500 duration-700 rounded-t-lg";
  c.appendChild(i);

  const t1 = document.createElement("h2");
  t1.innerText = product.name + " ";
  t1.className = "text-xl font-bold mt-2";
  c.appendChild(t1);

  const t2 = document.createElement("p");
  t2.innerText = product.price;
  t2.className = "text-gray-700 mt-1";
  c.appendChild(t2);

  const b1 = document.createElement("button");
  b1.innerText = "Add to Cart";
  b1.className =
    "bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 transition duration-200";
  c.appendChild(b1);
  return c;
}
export default ProductItem;