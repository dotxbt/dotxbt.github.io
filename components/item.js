function Item(title, desc) {
    var container = document.createElement('div');
    container.classList = 'content-item';

    var imageView = document.createElement('img');
    imageView.classList = 'avatar';
    imageView.src = "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"

    var titleContainer = document.createElement('div');
    titleContainer.classList = 'title-container';

    var titleText = document.createElement('p');
    titleText.classList = 'title';
    titleText.innerText = title;
    titleContainer.appendChild(titleText);

    var descText = document.createElement('p');
    descText.classList = 'description';
    descText.innerText = desc;
    titleContainer.appendChild(descText);

    container.appendChild(imageView);
    container.appendChild(titleContainer);

    return container;
}

export { Item };

