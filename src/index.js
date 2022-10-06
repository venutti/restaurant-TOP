import Header from './header.js';
import Home from './home.js';
import Nav from './nav.js';
import Products from './products.js';
import Contact from './contact.js';

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

const dataContact = {
  dir: 'Cosquín 198, Lomas de Zamora',
  ig: 'burguersur__',
  tel: '11 6721-9483',
};

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
const home = new Home();
const contact = new Contact(dataContact);


body.appendChild(header.HTML);
body.appendChild(nav.HTML);

const menuButton = document.querySelector('[data-layout="MENU"]');

const dictLayouts = {
  'BIENVENIDOS': home,
  'MENU': products,
  'CONTACTO': contact,
};

showLayout(menuButton, dictLayouts);

Array.from(document.querySelectorAll('.nav-item')).forEach(item => {
  console.log(item);
  item.addEventListener('click', e => {
    showLayout(e.target, dictLayouts);
  });
});
