// Initial State
document.getElementById("root").innerHTML = `
  <div class="flex flex-col h-screen w-screen bg-slate-800 text-slate-300 justify-center items-center">
  <i class="fa-solid fa-spinner text-[64px] text-pink-400 animate-spin mb-4"></i>
    <p>Please wait...</p>
  </div>
`;

// HEADER COMPONENT
const HeaderCard = async () => {
  const card = document.createElement("div");
  card.classList = `flex flex-col md:flex-row min-h-screen w-full justify-center items-center flex-1 bg-slate-800`;
  card.appendChild(await ProfileCard());
  card.appendChild(await SocMedCard());
  return card;
};

const ProfileCard = async () => {
  const cardParent = document.createElement("div");
  const card = document.createElement("div");
  card.classList = `flex flex-col min-h-screen justify-center items-center p-4`;
  await fetch("./data/asset.json")
    .then((res) => res.json())
    .then((data) => {
      card.innerHTML = `
    <div class="relative flex flex-col">
       <img class="w-[220px] h-[220px] md:w-[300px] md:h-[300px] object-cover rounded-full bg-gradient-to-tl from-pink-300 via-cyan-300 to-violet-300 p-3 md:p-4 m-10" 
        src="${data.image}"
       />
       <img class="w-[220px] absolute h-[220px] md:w-[300px] md:h-[300px] rounded-full p-3 md:p-4 m-10" 
        src="./assets/otw.png"
       />
       <div class="flex md:h-[46px] md:w-[46px] h-[36px] w-[36px] absolute md:top-[240px] md:left-[288px] top-[190px] left-[218px]">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full md:h-[46px] md:w-[46px] h-[36px] w-[36px] bg-green-500"></span>
        </div>
      </div>
    <div class="flex flex-col items-center pb-0 md:pb-10">
        <h1 class="text-xl text-slate-300 font-medium">Hello, I'm <a href="https://instagram.com/sabituddin_bigbang" target="_blank" rel="noopener noreferrer" class="text-2xl font-bold text-lime-500">Sabituddin Bigbang</a></h1>
        <p class="text-lg mt-2 italic text-slate-300">"Do what you love, love what you do"</p>
    </div>
    <h1 class="text-slate-300 mt-8 p-2">Open for Application Development positions :</h1>
    <div class="flex flex-wrap w-full max-w-[320px] font-medium">
      <div class="py-1 px-3 border-[1px] cursor-pointer hover:bg-green-500 hover:text-slate-800 border-green-500 rounded-xl m-2 text-green-500">Mobile</div>
      <div class="py-1 px-3 border-[1px] cursor-pointer hover:bg-purple-500 hover:text-slate-800 border-purple-500 rounded-xl m-2 text-purple-500">Web</div>
      <div class="py-1 px-3 border-[1px] cursor-pointer hover:bg-amber-500 hover:text-slate-800 border-amber-500 rounded-xl m-2 text-amber-600">Backend</div>
      <div class="py-1 px-3 border-[1px] cursor-pointer hover:bg-pink-500 hover:text-slate-800 border-pink-500 rounded-xl m-2 text-pink-500">EDC Machine</div>
      <div class="py-1 px-3 border-[1px] cursor-pointer hover:bg-sky-500 hover:text-slate-800 border-sky-500 rounded-xl m-2 text-sky-600">IoT</div>
    </div>
    `;
    });
  cardParent.append(card);
  return cardParent;
};

const SocMedCard = async () => {
  const card = document.createElement("div");
  const cardChild = document.createElement("div");
  card.classList = `flex flex-col justify-center items-start h-auto md:h-full p-4 md:p-8 bg-slate-700 w-full md:w-auto md:bg-transparent`;
  cardChild.classList = `max-w-[1360px] flex flex-col w-full justify-around items-start p-4 flex-1`;

  await fetch("./data/socmed.json")
    .then((res) => res.json())
    .then((data) => {
      cardChild.innerHTML = data.map(
        (e) => `
        <a ${e.url} class="flex flex-row cursor-pointer hover:animate-bounce items-center space-x-4  m-4 p-4 rounded-xl flex-1">
            <i class="${e.icon} text-[32px] text-center w-[46px] ${e.color}"></i>    
            <p class="text-2xl text-slate-400">${e.title}</p>
        </a>
    `
      );
    });
  cardChild.innerHTML = cardChild.innerHTML.replace(/,/g, "");
  card.append(cardChild);
  return card;
};

const FooterCard = () => {
  const card = document.createElement("div");
  card.classList = `w-full bg-slate-800 text-center text-md text-slate-300 py-6 px-10`;
  card.innerHTML = `
    Made with love | Sabituddin Bigbang @ ${new Date().getFullYear()} | All Right Reserved
  `;
  return card;
};

// SECTION COMPONENT
const SectionCard = async ({ headerTitle, data, colorBg, colorFg }) => {
  const card = document.createElement("div");
  const cardChild = document.createElement("div");
  card.classList = `flex flex-col w-full justify-start items-center p-0 md:p-4 ${colorBg}`;
  cardChild.classList = `flex grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 py-4 md:py-8 gap-4 md:gap-8 px-4 w-full`;

  await fetch(data)
    .then((res) => res.json())
    .then((data) => {
      cardChild.innerHTML = data
        ? data.map(
            (e) => `
      <a ${
        e.url
      } class="flex rounded-xl flex-col cursor-pointer justify-start items-center min-w-[100px] hover:animate-bounce p-4 rounded-2xl">
        ${
          e.logo
            ? `<img class=" h-[100px] w-[120px] p-4 flex-1 object-contain" src="${e.logo}"/>`
            : `<i class="${e.icon} text-[80px] text-center w-full flex flex-col items-center justify-center flex-1 h-[80px] ${e.color}"></i>`
        }  
        <p class="text-xl ${colorFg} mt-4 text-center">${e.title}</p>
      </a> 
      `
          )
        : "Loading....";
      cardChild.innerHTML = cardChild.innerHTML.replace(/,/g, "");
    });
  card.innerHTML = `<div class="text-lg md:text-2xl tracking-widest ${colorFg} font-medium p-4 mt-4"><h1>${headerTitle}</h1></div>`;
  card.append(cardChild);

  return card;
};

const MarqueeComponent = async () => {
  const cardChild = document.createElement("div");
  cardChild.classList = `w-full bg-slate-900`;
  cardChild.innerHTML = `<marquee class="w-full p-0">
  <div class="flex flex-row space-x-4 items-center pt-1">
      <p class="text-slate-300">Open for Application Development positions :</p>
      <div class="py-1 px-3 border-[1px] cursor-pointer hover:bg-green-500 hover:text-slate-800 border-green-500 rounded-xl m-2 text-green-500">Mobile</div>
      <div class="py-1 px-3 border-[1px] cursor-pointer hover:bg-purple-500 hover:text-slate-800 border-purple-500 rounded-xl m-2 text-purple-500">Web</div>
      <div class="py-1 px-3 border-[1px] cursor-pointer hover:bg-amber-500 hover:text-slate-800 border-amber-500 rounded-xl m-2 text-amber-600">Backend</div>
      <div class="py-1 px-3 border-[1px] cursor-pointer hover:bg-pink-500 hover:text-slate-800 border-pink-500 rounded-xl m-2 text-pink-500">EDC Machine</div>
      <div class="py-1 px-3 border-[1px] cursor-pointer hover:bg-sky-500 hover:text-slate-800 border-sky-500 rounded-xl m-2 text-sky-600">IoT</div>
      <div class="py-1 px-3 border-[1px] cursor-pointer hover:bg-teal-500 hover:text-slate-800 border-teal-500 rounded-xl m-2 text-teal-600">Frontend Engineer</div>
      <div class="py-1 px-3 border-[1px] cursor-pointer hover:bg-blue-500 hover:text-slate-800 border-blue-500 rounded-xl m-2 text-blue-600">Backend Engineer</div>
  </div>
  </marquee>`;
  return cardChild;
};

// HELPER
const Container = (children) => {
  let appContainer = document.createElement("div");
  appContainer.classList = "flex flex-1 flex-col items-center bg-white";
  for (let i = 0; i < children.length; i++) {
    appContainer.appendChild(children[i]);
  }
  return appContainer;
};

// APPS
const App = async () => {
  let children = [
    await HeaderCard(),
    await MarqueeComponent(),
    await SectionCard({
      headerTitle: "ACTIVITIES",
      data: "./data/activity.json",
      colorBg: "bg-slate-600",
      colorFg: "text-slate-300",
    }),
    await SectionCard({
      headerTitle: "LANGUAGES | INTERPRETERS",
      data: "./data/language.json",
      colorBg: "bg-slate-100",
      colorFg: "text-slate-800",
    }),
    await SectionCard({
      headerTitle: "FRAMEWORKS | LIBRARIES",
      data: "./data/framework.json",
      colorBg: "bg-slate-200",
      colorFg: "text-slate-800",
    }),
    await SectionCard({
      headerTitle: "TEMPLATES",
      data: "./data/template.json",
      colorBg: "bg-slate-600",
      colorFg: "text-slate-300",
    }),
    FooterCard(),
  ];
  return Container(children);
};

// Document ROOT
const RootApp = async () => {
  var root = document.getElementById("root");
  const app = await App();
  root.innerHTML = "";
  root.appendChild(app);
};

RootApp();
