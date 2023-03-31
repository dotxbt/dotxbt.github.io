document.body.classList =
  "bg-gradient-to-r from-violet-500 to-fuchsia-500 m-0 p-0";
// Initial State
document.getElementById("root").innerHTML = `
  <div class="flex flex-col h-screen w-screen bg-slate-800 text-slate-300 justify-center items-center">
  <i class="fa-solid fa-spinner text-[64px] text-pink-400 animate-spin mb-4"></i>
    <p>Please wait...</p>
  </div>
`;

const LinkCard = async () => {
  const card = document.createElement("div");
  const cardChild = document.createElement("div");
  card.classList = `flex flex-col min-h-screen w-full justify-center items-center`;
  cardChild.classList = `flex flex-col space-y-6 w-full p-4 max-w-md mb-8`;
  const logo = document.createElement("img");
  logo.classList = "h-[200px] w-[200px] object-cover my-6 shadow-xl rounded-full drop-shadow-2xl box-shadow-xl";
  logo.src = "./deli.png";
  card.appendChild(logo);
  await fetch("./deli.json")
    .then((res) => res.json())
    .then((data) => {
      cardChild.innerHTML = data
        ? data.map(
            (e) => `
      <a  href="${e.url}" target="_blank" active:opacity-50 rel="noopener noreferrer" class="flex flex-row cursor-pointer w-full shadow-2xl items-center bg-white/60 rounded-xl p-4">
        <img class=" h-[64px] w-[64px] object-contain" src="${e.logo}" width={64} height={64}/>
        <p class="text-3xl text-slate-800 font-bold flex-1 text-center">${e.title}</p>
      </a> 
      `
          )
        : "Loading....";
      cardChild.innerHTML = cardChild.innerHTML.replace(/,/g, "");
    });
  card.append(cardChild);

  return card;
};

// Document ROOT
const RootApp = async () => {
  var root = document.getElementById("root");
  const app = await LinkCard();
  root.innerHTML = "";
  root.appendChild(app);
};

RootApp();
