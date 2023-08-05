const Albarzanji = async () => {
  const parentEl = document.createElement("div");
  parentEl.classList =
    "flex flex-col items-start w-full  max-w-5xl text-slate-800";

  await fetch("./data/albarzanji.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.albarzanji.forEach((e, i) => {
        SectionCard(
          parentEl,
          `BAGIAN ${i + 1} `,
          e.header,
          e.bismillah,
          e.data
        );
      });
    });
  return parentEl;
};

const SectionCard = (parentEl, title, partTitle, bismillahTitle, data) => {
  const headerBab = document.createElement("p");
  headerBab.classList =
    "text-center font-sans w-full text-2xl font-medium sticky top-0 left-0 right-0 z-[999] p-4 text-white bg-teal-600";
  headerBab.innerHTML = title;
  parentEl.appendChild(headerBab);

  const headerTitle = document.createElement("p");
  headerTitle.classList = `text-center p-4 text-3xl md:text-[28pt] w-full leading-[2.0] md:leading-[2.4] bg-amber-200 `;
  headerTitle.innerHTML = partTitle;
  parentEl.appendChild(headerTitle);

  const bismillah = document.createElement("p");
  bismillah.classList = `text-center p-4 text-[26pt] sm:text-[42pt] w-full leading-[1.8] bg-green-200`;
  bismillah.innerHTML = bismillahTitle;
  parentEl.appendChild(bismillah);

  data.forEach((e, i) => {
    if (`${e}`.includes("#")) {
      const containerItem = document.createElement("div");
      containerItem.classList = `hidden md:flex flex-col md:flex-row items-center w-full ${
        i % 2 === 0 ? "bg-slate-100" : "bg-slate-200"
      }`;
      const dataItem = `${e}`.split("#");
      const txt = document.createElement("p");
      txt.classList = `text-end p-4 flex-1 text-[28pt] w-full leading-[2.0] md:leading-[2.4] `;
      txt.innerHTML = dataItem[1];
      containerItem.appendChild(txt);

      const separator = document.createElement("div");
      separator.classList = "mx-4";
      separator.innerHTML = `<i class="fa-solid text-[24px] text-teal-600 fa-certificate"></i>`;
      containerItem.appendChild(separator);

      const txt2 = document.createElement("p");
      txt2.classList = `text-start p-4 flex-1 text-[28pt] w-full leading-[2.0] md:leading-[2.4] `;
      txt2.innerHTML = dataItem[0];
      containerItem.appendChild(txt2);
      parentEl.appendChild(containerItem);

      const containerItemMobile = document.createElement("div");
      containerItemMobile.classList = `flex md:hidden flex-col md:flex-row items-center w-full ${
        i % 2 === 0 ? "bg-slate-100" : "bg-slate-200"
      }`;
      const dataItemMobile = `${e}`.split("#");
      const txtMobile = document.createElement("p");
      txtMobile.classList = `text-end p-4 flex-1 text-3xl w-full leading-[2.0] md:leading-[2.4] `;
      txtMobile.innerHTML = dataItemMobile[0];
      containerItemMobile.appendChild(txtMobile);

      const separatorMobile = document.createElement("div");
      separatorMobile.classList = "-my-2 flex flex-row items-center w-full";
      separatorMobile.innerHTML = `<p class="bg-slate-300 flex-1 h-[2px]"/><div><i class="fa-solid text-[14px] text-teal-600 mx-2 fa-certificate"></i></div><p class="bg-slate-300 flex-1 h-[2px]"/>`;
      containerItemMobile.appendChild(separatorMobile);

      const txt2Mobile = document.createElement("p");
      txt2Mobile.classList = `text-start p-4 flex-1 text-3xl w-full leading-[2.0] md:leading-[2.4] `;
      txt2Mobile.innerHTML = dataItemMobile[1];
      containerItemMobile.appendChild(txt2Mobile);
      parentEl.appendChild(containerItemMobile);
    } else {
      const txt = document.createElement("p");
      txt.classList = `text-end p-4 text-3xl md:text-[28pt] w-full leading-[2.0] md:leading-[2.4] ${
        i % 2 === 0 ? "bg-slate-100" : "bg-slate-200"
      }`;
      txt.innerHTML = e;
      parentEl.appendChild(txt);
    }
  });
};

// HELPER
const Container = (children) => {
  let appContainer = document.createElement("div");
  appContainer.classList =
    "flex flex-1 flex-col bg-gradient-to-br from-cyan-500 via-teal-500 to-blue-500 items-center line-space";
  for (let i = 0; i < children.length; i++) {
    appContainer.appendChild(children[i]);
  }
  return appContainer;
};

// APPS
const App = async () => {
  let children = [await Albarzanji()];
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
