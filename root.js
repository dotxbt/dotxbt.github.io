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
  {
    icon: "fa-solid fa-c",
    title: "C/C++",
    color: "text-yellow-500",
  },
  {
    icon: "fa-brands fa-java",
    title: "Java",
    color: "text-red-500",
  },
  {
    icon: "fa-solid fa-code",
    title: "Dart",
    color: "text-blue-500",
  },
  {
    icon: "fa-brands fa-golang",
    title: "GoLang",
    color: "text-cyan-500",
  },
];

const dataActivities = [
  {
    icon: "fa-solid fa-bed",
    title: "Sleep",
    color: "text-orange-500",
  },
  {
    icon: "fa-solid fa-dumbbell",
    title: "Workout",
    color: "text-teal-500",
  },
  {
    icon: "fa-solid fa-laptop-code",
    title: "Coding",
    color: "text-yellow-500",
  },
  {
    icon: "fa-solid fa-motorcycle",
    title: "Touring",
    color: "text-yellow-500",
  },
  {
    icon: "fa-solid fa-volleyball",
    title: "Volleyball",
    color: "text-yellow-500",
  },
  {
    icon: "fa-solid fa-hands-praying",
    title: "Pray",
    color: "text-pink-500",
  },
  {
    icon: "fa-solid fa-repeat",
    title: "Repeat",
    color: "text-purple-400",
  },
];

const dataFrameworks = [
  {
    title: "Tailwind CSS",
    logo: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg",
  },
  {
    title: "React JS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    title: "Redux",
    logo: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
  },
  {
    title: "Android",
    logo: "https://developer.android.com/static/images/brand/Android_Robot_200.png",
  },
  {
    title: "Flutter",
    logo: "https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg",
  },
  {
    title: "React Native",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    title: "Next JS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  {
    title: "Nest JS",
    logo: "https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg",
  },
];

const dataSocMed = [
  {
    icon: "fa-brands fa-instagram",
    title: "Instagram",
    color: "text-fuchsia-500",
    url: `href="https://instagram.com/sabituddin_bigbang" target="_blank" rel="noopener noreferrer"`,
  },
  {
    icon: "fa-brands fa-facebook",
    title: "Facebook",
    color: "text-blue-500",
    url: "",
  },
  {
    icon: "fa-brands fa-twitter",
    title: "Twitter",
    color: "text-cyan-500",
    url: "",
  },
  {
    icon: "fa-brands fa-youtube",
    title: "Youtube",
    color: "text-red-500",
    url: "",
  },
  {
    icon: "fa-brands fa-github",
    title: "Github",
    color: "text-slate-300",
    url: `href="https://github.com/dotxbt" target="_blank" rel="noopener noreferrer"`,
  },
];

const HeaderCard = () => {
  const card = document.createElement("div");
  card.classList = `flex flex-col md:flex-row min-h-screen w-full justify-center items-center flex-1 bg-gray-800`;
  card.appendChild(ProfileCard());
  card.appendChild(SocMedCard());
  return card;
};

const ProfileCard = () => {
  const card = document.createElement("div");
  card.classList = `flex flex-col min-h-screen justify-center items-center p-4 bg-gray-800`;
  card.innerHTML = `
    <img class="w-[220px] h-[220px] lg:w-[300px] lg:h-[300px] object-cover rounded-full hover:animate-bounce bg-gradient-to-tl from-pink-300 via-cyan-300 to-violet-300 p-4 m-10" src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/198661030_4377617105595981_5524873156723026352_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGgVoStKxX5cr5_DTaPjnr3R32DTe7whR9HfYNN7vCFH96yFoM96q5t410wYcD15L64OIo7QOFKgKezU0ijk9YN&_nc_ohc=EAxzAsVGNwcAX_A6NLH&_nc_ht=scontent-sin6-1.xx&oh=00_AT__pdcvdVsfiQomO6nDGm0OT_4HBNrzibbWP2ChZ_7HMQ&oe=63076B27" />
    <div class="flex flex-col items-center pb-0 md:pb-10">
        <h1 class="text-xl text-slate-300 font-medium">Hello, I'm <a href="https://instagram.com/sabituddin_bigbang" target="_blank" rel="noopener noreferrer" class="text-2xl font-bold text-fuchsia-200">Sabituddin Bigbang</a></h1>
        <p class="text-lg mt-2 italic text-slate-300">"Do what you love, love what you do"</p>
    </div>`;
  return card;
};

const SocMedCard = () => {
  const card = document.createElement("div");
  const cardChild = document.createElement("div");
  card.classList = `flex flex-col justify-center items-start h-auto md:h-full p-4 md:p-8 bg-gray-900 w-full md:w-auto md:bg-transparent`;
  cardChild.classList = `max-w-[1360px] flex flex-col w-full justify-around items-start p-4 flex-1`;
  cardChild.innerHTML = dataSocMed.map(
    (e) => `
        <a ${e.url} class="flex flex-row cursor-pointer items-center space-x-4  m-4 p-4 rounded-xl flex-1">
            <i class="${e.icon} text-[32px] ${e.color}"></i>    
            <p class="text-2xl text-slate-400">${e.title}</p>
        </a>
    `
  );
  cardChild.innerHTML = cardChild.innerHTML.replace(/,/g, "");
  card.append(cardChild);
  return card;
};

const FrameworkCard = () => {
  const card = document.createElement("div");
  const cardChild = document.createElement("div");
  card.classList = `flex flex-col w-full justify-around items-center p-4 md:p-8 flex-1 bg-slate-200`;
  cardChild.classList = `max-w-[1360px] flex flex-wrap w-full justify-around items-center p-4 flex-1`;
  cardChild.innerHTML = dataFrameworks.map(
    (e) => `
      <a ${e.url} class="flex flex-col cursor-pointer items-center space-y-4  m-4 p-4 rounded-xl flex-1">
        <img class=" h-[80px] w-[80px] object-contain" src="${e.logo}"/> 
        <p class="text-xl text-slate-600 text-center">${e.title}</p>
      </a>
      `
  );
  cardChild.innerHTML = cardChild.innerHTML.replace(/,/g, "");
  card.innerHTML = `<div class="text-2xl text-slate-600 font-medium mb-4"><h1>F R A M E W O R K S</h1></div>`;
  card.append(cardChild);
  return card;
};

const FooterCard = () => {
  const card = document.createElement("div");
  card.classList = `w-full bg-slate-800 text-center text-md text-slate-300 py-6 px-10`;
  card.innerHTML = `
    Made with love | Sabituddin Bigbang @ ${new Date().getFullYear()}. All Right Reserved
  `;
  return card;
};

const ActivitiesCard = () => {
  const card = document.createElement("div");
  const cardChild = document.createElement("div");
  card.classList = `flex flex-col w-full justify-around items-center p-4 md:p-8 flex-1 bg-gray-700`;
  cardChild.classList = `max-w-[1360px] flex flex-wrap w-full justify-around items-center p-4 flex-1`;
  cardChild.innerHTML = dataActivities.map(
    (e) => `
        <div class="flex items-center hover:animate-bounce flex-col m-4 p-4 rounded-xl flex-1">
            <i class="${e.icon} text-[64px] ${e.color}"></i>    
            <p class="text-2xl mt-6 text-slate-400">${e.title}</p>
        </div>
    `
  );
  cardChild.innerHTML = cardChild.innerHTML.replace(/,/g, "");
  card.innerHTML = `<div class="text-2xl text-slate-200 font-medium mb-4"><h1>A C T I V I T I E S</h1></div>`;
  card.append(cardChild);
  return card;
};

const CodingCard = () => {
  const card = document.createElement("div");
  const cardChild = document.createElement("div");
  card.classList = `flex flex-col w-full justify-around items-center p-4 md:p-8 flex-1 bg-slate-100`;
  cardChild.classList = `max-w-[1360px] flex flex-wrap w-full justify-around items-center p-4 flex-1`;
  cardChild.innerHTML = dataCoding.map(
    (e) => `
        <div class="flex items-center hover:animate-bounce flex-col m-4 p-4 rounded-xl flex-1">
            <i class="${e.icon} text-[100px] ${e.color}"></i>    
            <p class="text-2xl mt-6 text-slate-600">${e.title}</p>
        </div>
    `
  );
  cardChild.innerHTML = cardChild.innerHTML.replace(/,/g, "");
  card.innerHTML = `<div class="text-2xl text-slate-600 font-medium mb-4"><h1>N G O D I N G</h1></div>`;
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
  let children = [
    HeaderCard(),
    ActivitiesCard(),
    CodingCard(),
    FrameworkCard(),
    FooterCard(),
  ];
  return Container(children);
}

// Document ROOT
var root = document.getElementById("root");
root.appendChild(App());
