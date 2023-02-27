document.body.classList = "bg-slate-900";
// Initial State
document.getElementById("store").innerHTML = `
  <div class="flex flex-col h-screen w-screen bg-slate-800 text-slate-300 justify-center items-center">
  <i class="fa-solid fa-spinner text-[64px] text-pink-400 animate-spin mb-4"></i>
    <p>Please wait...</p>
  </div>
`;

const CardComponent = () => {
  const container = document.createElement("div");
  container.classList =
    "flex flex-col cursor-pointer items-center active:opacity-50 active:scale-90 transition-all ease-in-out duration-500 w-full overflow-hidden rounded-xl bg-slate-800";

  const image = document.createElement("img");
  image.classList = "object-cover w-full aspect-square";
  image.src =
    "https://s4.bukalapak.com/bukalapak-kontenz-production/content_attachments/80719/original/Mobile_Legends_Adventure_1.jpg";

  const text = document.createElement("p");
  text.className = "text-slate-300 text-md p-2";
  text.innerText = "Mobile Legends";

  container.appendChild(image);
  container.appendChild(text);

  container.onclick = () => {
    showDialog(true, {
      image: image.src,
      title: text.innerText,
    });
  };

  return container;
};

const showDialog = (show, data) => {
  const dialog = document.getElementById("dialog");
  dialog.classList = `fixed flex flex-col items-center p-4 justify-center top-0 bottom-0 w-full ${
    show ? "bg-black/60 z-[9999]" : "bg-transparent -z-[1]"
  } transition-all ease-in-out duration-700`;
  const dialogContainer = document.getElementById("dialog-container");

  dialogContainer.classList = `w-full max-w-md bg-slate-900 overflow-hidden rounded-3xl ${
    show ? "scale-100 z-[999]" : "scale-0 -z-1"
  } transition-all ease-in-out duration-700`;

  if (data) {
    const image = document.createElement("img");
    image.classList = "object-cover w-full aspect-ratio[9/12]";
    image.src = data.image;

    const text = document.createElement("h1");
    text.className = "text-slate-300 text-xl font-bold p-4 text-center";
    text.innerText = data.title;
    const desc = document.createElement("p");
    desc.className =
      "text-slate-300 text-md font-normal px-6 pb-6 text-justify";
    desc.innerText =
      "Mobile Legends: Bang Bang adalah permainan video seluler ber-genre multiplayer online battle arena yang dikembangkan dan diterbitkan oleh Moonton, anak perusahaan dari ByteDance. ";

    dialogContainer.appendChild(image);
    dialogContainer.appendChild(text);
    dialogContainer.appendChild(desc);
  }

  dialog.onclick = () => {
    showDialog(false);
    setTimeout(() => {
      dialogContainer.innerHTML = "";
    }, 700);
  };
};

const settingNavbar = () => {
  const navbar = document.getElementById("navbar");
  navbar.classList =
    "sticky top-0 left-0 w-full flex flex-row items-center justify-center h-[72px] bg-slate-900/90  shadow-md shadow-black/20 z-[99]";

  const navContainer = document.createElement("div");
  navContainer.classList =
    "flex flex-row w-full max-w-5xl items-center justify-between";
  navContainer.innerHTML = `<p class="text-3xl font-bold px-6 text-slate-300">Gaming Store<p><div class="px-6 font-bold text-white">Top Up<div>`;
  navbar.append(navContainer);
};

settingNavbar();

const GridContainer = (children) => {
  const container = document.createElement("div");
  container.classList = "flex flex-col items-center w-full bg-slate-900";
  const gridContainer = document.createElement("div");
  gridContainer.classList =
    "w-full max-w-5xl self-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center p-6 bg-slate-900 gap-4 w-full";
  children.forEach((element) => {
    gridContainer.appendChild(element);
  });

  container.appendChild(gridContainer);
  return container;
};

// Document ROOT
const RootApp = async () => {
  var root = document.getElementById("store");
  const data = [];
  for (let i = 0; i < 50; i++) {
    data.push(CardComponent());
  }
  const app = GridContainer(data);
  root.innerHTML = "";
  root.appendChild(app);
};

RootApp();
