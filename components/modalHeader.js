function ModalHeader(title, onCloseListener) {
    var headerContainer = document.createElement('div');
    headerContainer.classList = 'header-container';

    var headerTitle = document.createElement('p');
    headerTitle.classList = 'header-title';
    headerTitle.innerText = title;
    headerContainer.appendChild(headerTitle);

    var closeButton = document.createElement('button');
    closeButton.classList = 'close-button';
    closeButton.innerHTML = "<span>&times;</span>";
    closeButton.onclick = onCloseListener;
    headerContainer.appendChild(closeButton);

    return headerContainer;
}

export { ModalHeader };