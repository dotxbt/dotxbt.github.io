import { Item } from "./item.js";

function ListContent() {
    var parentDiv = document.createElement('div');
    parentDiv.classList = 'content-container';

    for (let i = 0; i < 30; i++) {
        parentDiv.appendChild(Item("Hello World! User - " + (i + 1), "Lorem ipsum sir dolor amet ...."));
    }
    return parentDiv;
}

export { ListContent };
