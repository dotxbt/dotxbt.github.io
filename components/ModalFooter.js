function ModalFooter() {
    var footerContainer = document.createElement('div');
    footerContainer.classList = 'footer-container';
    var footerText = document.createElement('p');
    footerText.innerText = "Copyright©" + new Date().getFullYear() + " Example.com, All right reserved"
    footerContainer.appendChild(footerText);
    return footerContainer;
}

export { ModalFooter };
