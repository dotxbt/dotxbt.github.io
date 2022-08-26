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
  card.appendChild(ProfileCard());
  card.appendChild(await SocMedCard());
  return card;
};

const ProfileCard = () => {
  const card = document.createElement("div");
  card.classList = `flex flex-col min-h-screen justify-center items-center p-4`;
  card.innerHTML = `
    <div class="relative flex flex-col">
       <img class="w-[220px] h-[220px] md:w-[300px] md:h-[300px] object-cover rounded-full bg-gradient-to-tl from-pink-300 via-cyan-300 to-violet-300 p-3 md:p-4 m-10" 
        src="./photo.jpg"
       />
       <div class="flex md:h-[46px] md:w-[46px] h-[36px] w-[36px] absolute md:top-[240px] md:left-[288px] top-[190px] left-[218px]">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full md:h-[46px] md:w-[46px] h-[36px] w-[36px] bg-pink-500"></span>
        </div>
      </div>
    <div class="flex flex-col items-center pb-0 md:pb-10">
        <h1 class="text-xl text-slate-300 font-medium">Hello, I'm <a href="https://instagram.com/sabituddin_bigbang" target="_blank" rel="noopener noreferrer" class="text-2xl font-bold text-fuchsia-200">Sabituddin Bigbang</a></h1>
        <p class="text-lg mt-2 italic text-slate-300">"Do what you love, love what you do"</p>
    </div>`;

  return card;
};

const SocMedCard = async () => {
  const card = document.createElement("div");
  const cardChild = document.createElement("div");
  card.classList = `flex flex-col justify-center items-start h-auto md:h-full p-4 md:p-8 bg-slate-700 w-full md:w-auto md:bg-transparent`;
  cardChild.classList = `max-w-[1360px] flex flex-col w-full justify-around items-start p-4 flex-1`;

  await fetch("./data_socmed.json")
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
  cardChild.classList = `flex flex-wrap py-4 px-4 md:px-10`;

  await fetch(data)
    .then((res) => res.json())
    .then((data) => {
      cardChild.innerHTML = data
        ? data.map(
            (e) => `
      <a ${
        e.url
      } class="flex flex-col cursor-pointer items-center min-w-[100px] hover:animate-bounce  m-4 p-4 rounded-xl flex-1">
        ${
          e.logo
            ? `<img class=" h-[56px] w-[56px] object-contain" src="${e.logo}" width={64} height={64}/>`
            : `<i class="${e.icon} text-[46px] text-center w-[56px] h-[56px] ${e.color}"></i>`
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
    await SectionCard({
      headerTitle: "ACTIVITIES",
      data: "./data_activity.json",
      colorBg: "bg-slate-600",
      colorFg: "text-slate-300",
    }),
    await SectionCard({
      headerTitle: "LANGUAGES | INTERPRETERS",
      data: "./data_language.json",
      colorBg: "bg-slate-100",
      colorFg: "text-slate-600",
    }),
    await SectionCard({
      headerTitle: "FRAMEWORKS | LIBRARIES",
      data: "./data_framework.json",
      colorBg: "bg-slate-200",
      colorFg: "text-slate-600",
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
