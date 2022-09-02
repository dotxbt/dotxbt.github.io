const ProfileCard = async () => {
  const cardParent = document.createElement("div");
  const card = document.createElement("div");
  card.classList = `flex flex-col min-h-screen justify-center items-center p-4`;
  await fetch("./asset.json")
    .then((res) => res.json())
    .then((data) => {
      card.innerHTML = `
      <div class="relative flex flex-col">
         <img class="w-[220px] h-[220px] md:w-[300px] md:h-[300px] object-cover rounded-full bg-gradient-to-tl from-pink-300 via-cyan-300 to-violet-300 p-3 md:p-4 m-10" 
          src="${data.image}"
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
    });
  cardParent.append(card);
  return cardParent;
};

module.exports = {
  ProfileCard: ProfileCard,
};
