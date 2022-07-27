const dataCoding = [
  {
    icon: "fa-brands fa-html5",
    title: "HTML",
    color: "text-orange-500",
  },
  {
    icon: "fa-brands fa-css3",
    title: "CSS 3",
    color: "text-cyan-500",
  },
  {
    icon: "fa-brands fa-js",
    title: "Javascript",
    color: "text-yellow-500",
  },
];

const MainCard = () => {
  const card = document.createElement("div");
  card.classList = `flex flex-col min-h-screen w-full justify-center items-center p-4 flex-1 bg-gradient-to-t from-violet-900 to-violet-700`;
  card.innerHTML = `
    <img class="w-[220px] h-[220px] lg:w-[300px] lg:h-[300px] object-cover rounded-full hover:animate-bounce bg-gradient-to-tl from-pink-300 via-cyan-300 to-violet-300 p-4 m-10" src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/198661030_4377617105595981_5524873156723026352_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGgVoStKxX5cr5_DTaPjnr3R32DTe7whR9HfYNN7vCFH96yFoM96q5t410wYcD15L64OIo7QOFKgKezU0ijk9YN&_nc_ohc=EAxzAsVGNwcAX_A6NLH&_nc_ht=scontent-sin6-1.xx&oh=00_AT__pdcvdVsfiQomO6nDGm0OT_4HBNrzibbWP2ChZ_7HMQ&oe=63076B27" />
    <div class="flex flex-col items-center">
        <h1 class="text-xl text-slate-300 font-medium">Hello, I'm <a href="https://instagram.com/sabituddin_bigbang" target="_blank" rel="noopener noreferrer" class="text-2xl font-bold text-fuchsia-200">Sabituddin Bigbang</a></h1>
        <p class="text-lg mt-4 text-slate-300">Thanks for visiting</p>
        <a href="https://github.com/dotxbt" target="_blank" rel="noopener noreferrer" class="text-2xl hover:bg-fuchsia-700 text-white mt-8 font-bold rounded-full bg-gradient-to-bl from-purple-700 to-fuchsia-500 px-[80px] py-[8px]">DOT XBT</a>
    </div>`;
  return card;
};

const FooterCard = () => {
  const card = document.createElement("div");
  card.classList = `flex flex-col min-h-[100px] lg:min-h-[300px] w-full justify-center items-center p-4 flex-1 bg-slate-500`;
  card.innerHTML = `
    <h1 class="text-xl text-slate-200 mb-4">Framework</h1>
    <img class=" w-full p-4 h-[64px] lg:w-[420px] lg:h-[220px] object-contain" src="https://tailwindcss.com/_next/static/media/tailwindcss-logotype-white.e0b2bd6155fa0bed8e24ff6b28f4a911.svg"/>
  `;
  return card;
};

const Menu = () => {
  const card = document.createElement("div");
  card.classList = `flex w-full flex-row justify-around items-center bg-yellow-600 px-10 py-6 flex-1 bg-white/30 backdrop-blur-md sticky top-0`;

  card.innerHTML = [1, 2, 3, 4, 5].map(
    (e, i) =>
      `<button class="px-10 py-2 text-teal-500 font-bold">Menu - ${i}</button>`
  );
  card.innerHTML = card.innerHTML.replace(/,/g, "");
  return card;
};

const CodinCard = () => {
  const card = document.createElement("div");
  const cardChild = document.createElement("div");
  card.classList = `flex flex-col w-full justify-around items-center p-4 flex-1 bg-slate-200`;
  cardChild.classList = `max-w-[1360px] flex flex-col lg:flex-row w-full justify-around items-center p-4 flex-1`;
  cardChild.innerHTML = dataCoding.map(
    (e) => `
        <div class="flex items-center hover:animate-bounce flex-col m-4 p-4 rounded-xl flex-1">
            <i class="${e.icon} text-[100px] lg:text-[200px] ${e.color}"></i>    
            <p class="text-3xl py-2 font-bold text-slate-600">${e.title}</p>
        </div>
    `
  );
  cardChild.innerHTML = cardChild.innerHTML.replace(/,/g, "");
  card.innerHTML = `<div class="text-xl text-slate-500 font-medium mb-4"><h1>Codes</h1></div>`;
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
function App() {
  let children = [MainCard(), CodinCard(), FooterCard()];
  return Container(children);
}

// Document ROOT
var root = document.getElementById("root");
root.appendChild(App());
