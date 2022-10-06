import Header from './header.js';
import Nav from './nav.js';
import Products from './products.js';

const body = document.querySelector('body');

const dataProducts = [
  {
    name: 'Classic Cheese (con papas)',
    description: 'Medallón de carne de 160gr, doble cheddar',
    prevPrice: '900',
    actualPrice: '810',
    img: 'img/products/161189.jpeg',
  },
  {
    name: 'Classic Bacon (con papas)',
    description: 'Medallón de carne de 160gr, doble cheddar y doble panceta',
    actualPrice: '950',
    img: 'img/products/161190.jpeg',
  },
  {
    name: 'Onion Crazy (con papas)',
    description: 'Medallón de carne de 150gr, cebolla caramelizada y doble cheddar',
    actualPrice: '940',
    img: 'img/products/161191.jpeg',
  },
];

function clearActiveItems() {
  const navItems = Array.from(document.querySelectorAll('.nav-item'));
  navItems.forEach(item => {
    item.classList.remove('active');
  });
};

function clearMain() {
  const main = document.querySelector('.main');
  if(!main) return;
  main.remove();
};

function showLayout(item, dictLayouts) {
  if(item.classList.contains('active')) return;
  clearActiveItems();
  clearMain();
  item.classList.add('active');
  body.appendChild(dictLayouts[item.dataset.layout].HTML);
};

const header = new Header('img/logo.png');
const nav = new Nav(['BIENVENIDOS', 'MENU', 'CONTACTO']);
const products = new Products(dataProducts);

body.appendChild(header.HTML);
body.appendChild(nav.HTML);

const menuButton = document.querySelector('[data-layout="MENU"]');

const dictLayouts = {
  'BIENVENIDOS': products,
  'MENU': products,
  'CONTACTO': products,
};

showLayout(menuButton, dictLayouts);

Array.from(document.querySelectorAll('.nav-item')).forEach(item => {
  console.log(item);
  item.addEventListener('click', e => {
    showLayout(e.target, dictLayouts);
  });
});

