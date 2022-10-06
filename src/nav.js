export default class Nav {
  constructor(navItems) {
    this.navItems = navItems;
  };
  get HTML() {
    const element = document.createElement('ul');
    element.classList.add('nav');
    element.innerHTML = 
    this.navItems.map(item => {
      return `<li class="nav-item" data-layout=${item}>${item}</li>`;
    }).join('');
    return element;
  };
};
