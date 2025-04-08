const home = import("./home.js");
const body = document.body;

const navs = document.querySelectorAll(".nav .nav-item");
navs.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const itemOld = document.querySelector(".nav .nav-item.active");
    itemOld.classList.remove("active");
    e.target.classList.add("active");
    route(e.target.id);
  });
});

function route(id) {
  if (id === "home") {
    import("./home.js").then((module) => {
      appendChild(module.default);
    });
  } else if (id === "contact") {
    import("./contact.js").then((module) => {
      appendChild(module.default);
    });
  } else {
    import("./about.js").then((module) => {
      appendChild(module.default);
    });
  }
}

function appendChild(child) {
  const navs = document.querySelector(".nav");
  document.body.innerHTML = "loading...";
  document.body.innerHTML = "";
  document.body.appendChild(navs);
  document.body.appendChild(child);
}
