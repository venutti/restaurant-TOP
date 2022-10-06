export default class Header {
  constructor(url) {
    this.url = url;
  };
  get HTML() {
    const element = document.createElement('div');
    element.classList.add('header');
    element.innerHTML =
    `<img class="logo" src=${this.url} alt="logo">`;
    return element;
  };
};
