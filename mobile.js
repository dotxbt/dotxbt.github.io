const colors = [
  "green",
  "purple",
  "blue",
  "yellow",
  "amber",
  "orange",
  "pink",
  "indigo",
];
let isShowMenu = false;
let horizontalScroll = document.getElementById("horizontal-scroll");
let itemContainerHScroll = document.createElement("div");
itemContainerHScroll.classList = "flex flex-row items-center space-x-4 p-4";

let hScrollContainer = document.getElementById("hscroll-container");
let itemHScroll = document.createElement("div");
itemHScroll.classList = "flex flex-row items-center space-x-4 p-4";

let sideMenu = document.getElementById("side-menu");
let buttonMenu = document.getElementById("button-menu");
let listContainer = document.getElementById("list-container");

sideMenu.classList =
  "absolute z[99] left-0  bottom-0 md:bottom-[46px] flex flex-col items-center top-0 md:top-[58px] bg-slate-900 w-[200px] -translate-x-full transition ease-in-out transition-all duration-500";

let itemContainerGrid = document.getElementById("grid-container");

colors.forEach((e) => {
  itemContainerHScroll.innerHTML =
    itemContainerHScroll.innerHTML +
    `<div class="h-[160px] w-[200px] bg-` +
    e +
    `-500 flex flex-row items-center justify-center rounded-xl">
    <p class="fa-solid fa-image text-[80px]"></p> 
    </div>`;

  itemHScroll.innerHTML =
    itemHScroll.innerHTML +
    `<div class="h-[200px] aspect-[12/6] bg-` +
    e +
    `-500 flex flex-row items-center justify-center rounded-xl">
        <p class="fa-solid fa-image text-[120px]"></p> 
    </div>`;

  itemContainerGrid.innerHTML =
    itemContainerGrid.innerHTML +
    `<div class="h-[240px] p-6 rounded-xl bg-` +
    e +
    `-500 flex flex-col items-center">
    <div class="flex-1 flex flex-col items-center justify-center"><p class="fa-solid fa-image text-[64px]"></p> </div>
    <p class="h-[10px] rounded-full w-full bg-slate-800"></p>
    </div>`;
  listContainer.innerHTML =
    listContainer.innerHTML +
    `<div class="rounded-xl flex flex-row items-center bg-` +
    e +
    `-500 p-4 w-full">
                <p class="h-[80px] w-[80px] rounded-full bg-slate-800"></p>
                <div class="flex flex-col flex-1 items-start space-y-6 px-6 justify-center">
                    <p class="h-[16px] w-full rounded-full bg-slate-800"></p>
                    <p class="h-[10px] w-full rounded-full bg-slate-800"></p>
                </div>
            </div>`;
});
horizontalScroll.append(itemContainerHScroll);
hScrollContainer.append(itemHScroll);

window.addEventListener("click", (e) => {
  console.log(e.target);
  if (buttonMenu === e.target) {
    sideMenu.classList =
      "absolute z[99] p-3 left-0 bottom-0 md:bottom-[46px] flex flex-col items-center top-0 md:top-[58px] bg-slate-900 w-[200px] translate-x transition ease-in-out transition-all duration-500";
    isShowMenu = true;
  } else if (!sideMenu.contains(e.target)) {
    sideMenu.classList =
      "absolute z[99] p-3 left-0 bottom-0 md:bottom-[46px] flex flex-col items-center top-0 md:top-[58px] bg-slate-900 w-[200px] -translate-x-full transition ease-in-out transition-all duration-500";
    isShowMenu = false;
  }
});
