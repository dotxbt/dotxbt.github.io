import ProductSection from "./product/product.js";

// STATE
let categories = [];
let selectedCategory = undefined;
let productView = undefined;

// LAYOUT

const categoryContainer = document.createElement("div");
const sidebarBarrier = document.createElement("div");
sidebarBarrier.addEventListener("click", () => {
  showSidebar(false, sidebarContainer, sidebarBarrier);
});
const sidebarContainer = document.createElement("div");
sidebarBarrier.className =
  "w-full h-screen hidden fixed top-0 bottom-0 left-0 right-0 z-[99999] transition-all duration-500 ease-in-out bg-white opacity-0";
sidebarContainer.className =
  "flex flex-col items-end justify-start space-y-3 min-w-[240px] bg-white p-4 max-w-full fixed top-0 right-0 bottom-0 h-full z-[9999999] translate-x-full transition-all duration-500 ease-in-out";

// COMPONENTS
function CategoryButton(category, prefix = "") {
  const b = document.createElement("button");
  b.innerText = category.name;
  b.id = `${prefix}category-${category.id}`;
  b.className = `px-4 py-2 font-medium cursor-pointer rounded-lg border-[1px] border-white  hover:border-blue-600 transition duration-200 ${
    category.selected ? "bg-blue-600 text-white" : "text-gray-700"
  }`;
  b.addEventListener("click", () => {
    showSidebar(false, sidebarContainer, sidebarBarrier);

    categories = categories.map((cat) => {
      if (cat.id === category.id) {
        return { ...cat, selected: true };
      }
      return { ...cat, selected: false };
    });
    categories.forEach((cat) => {
      if (cat.selected) {
        selectedCategory = cat;
        document.getElementById(
          `${prefix}category-${cat.id}`
        ).className = ` text-white  cursor-pointer px-4 py-2 rounded-lg transition duration-400 bg-blue-600 font-medium`;
      } else {
        document.getElementById(
          `${prefix}category-${cat.id}`
        ).className = ` text-gray-700  cursor-pointer px-4 py-2 rounded-lg transition duration-400 `;
      }
      SidebarLayout();
      Category();
    });

    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    productView =  ProductSection(category.path);
  });
  return b;
}

const SidebarLayout = () => {
  sidebarContainer.innerHTML = "";
  const t = document.createElement("h2");
  t.innerText = "Categories";
  t.className = "text-xl font-bold mt-2";
  sidebarContainer.appendChild(t);
  categories.forEach((category) => {
    const b = CategoryButton(category, "side");
    sidebarContainer.appendChild(b);
  });
};

const getCategories = async () => {
  return await fetch("./data/category.json")
    .then((res) => res.json())
    .then((data) => data);
};

const Category = () => {
  categoryContainer.innerHTML = "";
  resizeCategory(categoryContainer);
  window.addEventListener("resize", () => {
    categoryContainer.innerHTML = "";
    resizeCategory(categoryContainer);
    const bm = IconButton();
    bm.addEventListener("click", () => {
      showSidebar(true, sidebarContainer, sidebarBarrier);
    });
    categoryContainer.appendChild(bm);
  });

  const bt = IconButton();
  bt.addEventListener("click", () => {
    showSidebar(true, sidebarContainer, sidebarBarrier);
  });
  categoryContainer.appendChild(bt);
};

const showSidebar = (show, sidebar, barrier) => {
  if (show) {
    barrier.classList.remove("hidden");
    barrier.classList.remove("bg-white");
    barrier.classList.remove("opacity-0");
    barrier.classList.remove("-z-0");
    setTimeout(() => {
      barrier.classList.add("bg-black");
      barrier.classList.add("opacity-50");
    }, 100);
    sidebar.classList.remove("translate-x-full");
    sidebar.classList.add("translate-x-0");
    sidebar.classList.add("translate-x-0");
    document.body.style.overflow = "hidden";
  } else {
    barrier.classList.remove("flex");
    barrier.classList.remove("bg-black");
    barrier.classList.remove("opacity-50");
    barrier.classList.add("bg-white");
    barrier.classList.add("opacity-0");
    setTimeout(() => {
      sidebarBarrier.classList.add("hidden");
      document.body.style.overflow = "auto";
    }, 500);
    sidebar.classList.remove("translate-x-0");
    sidebar.classList.add("translate-x-full");
  }
};

const resizeCategory = (c) => {
  if (window.innerWidth < 768) {
    c.className =
      " flex-row m-auto space-x-4 text-center shadow-lg shadow-black/5 flex justify-center bg-white items-center p-2 sticky top-0 z-[99999] left-0";
    const p = document.createElement("p");
    p.innerText = selectedCategory.name;
    p.className = "text-xl flex-1 text-start px-4 font-medium text-slate-700";
    c.appendChild(p);
  } else {
    c.className =
      " flex-row m-auto space-x-4 text-center shadow-lg shadow-black/5  flex justify-center bg-white items-center p-2 sticky top-0 z-[99999] left-0";
    categories.forEach((category) => {
      const b = CategoryButton(category);
      c.appendChild(b);
    });
  }
};

const IconButton = () => {
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-bars cursor-pointer";
  const bt = document.createElement("button");
  bt.className =
    "px-4 py-2 font-medium cursor-pointer md:hidden rounded-lg hover:bg-gray-300 transition duration-200";
  bt.appendChild(icon);
  return bt;
};

const Banner = () => {
  const c = document.createElement("div");
  c.className =
    "w-full aspect-[5/1.76] relative bg-gray-300 flex items-center justify-center rounded-lg shadow-lg";

  const i = document.createElement("img");
  i.src =
    "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-1200,pr-true,f-auto/uploads/page/banner/homepage-banner-1366x573px-06122024-053200.jpg";
  i.alt = "Banner Image";
  i.className = "w-full h-full absolute z-0 object-cover";
  c.appendChild(i);

  const t = document.createElement("h1");
  t.innerText = "Welcome to Our Store";
  t.className = "text-[46px] font-bold absolute bottom-8 left-6 text-white";
  c.appendChild(t);
  return c;
};

// APPEND TO DOM
const runApps = async () => {
  const bd = document.querySelector("body");
  categories = await getCategories();
  selectedCategory = categories[0];
  Category();
  SidebarLayout();
  productView = ProductSection("matic");
  bd.appendChild(Banner());
  bd.appendChild(categoryContainer);
  bd.appendChild(productView);
  bd.appendChild(sidebarBarrier);
  bd.appendChild(sidebarContainer);
};

runApps();
