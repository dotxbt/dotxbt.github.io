import { ModalContent } from "./components/ModalContent.js";

function App() {
    var appContainer = document.createElement('div');
    appContainer.classList = 'main-container';
    appContainer.innerHTML = "<h1 class='hello'>Modal Test :)</h1>"

    var modalContainer = document.createElement('div');
    modalContainer.classList = 'modal';
    modalContainer.appendChild(ModalContent("List Example", () => {
        modalContainer.style.display = "none";
    }));

    var buttonModal = document.createElement('button');
    buttonModal.classList = "show-button";
    buttonModal.innerHTML = "<span class='close'>Show Modal</span>"
    buttonModal.onclick = (e) => {
        modalContainer.style.display = "block";
    }

    window.onclick = function (event) {
        if (event.target == modalContainer) {
            modalContainer.style.display = "none";
        }
    }

    window.onkeydown = function (e) {
        if (e.key === "Escape") {
            modalContainer.style.display = "none";
        }
    }

    appContainer.appendChild(buttonModal);
    appContainer.appendChild(modalContainer);
    return appContainer;
}

export { App };