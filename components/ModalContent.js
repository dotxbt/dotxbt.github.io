import { ListContent } from "./ListContent.js";
import { ModalFooter } from "./ModalFooter.js";
import { ModalHeader } from "./modalHeader.js";

function ModalContent(headerTitle, closeListener) {
    var modalContent = document.createElement('div');
    modalContent.classList = 'modal-content';
    modalContent.appendChild(ModalHeader(headerTitle, closeListener));
    modalContent.appendChild(ListContent());
    modalContent.appendChild(ModalFooter());

    return modalContent;
}

export { ModalContent };
