import Header from './header.js';
import Nav from './nav.js';
import Products from './products.js';

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

const body = document.querySelector('body');

const header = new Header('img/logo.png');
const nav = new Nav(['BIENVENIDOS', 'MENU', 'CONTACTO', 'INFO']);
const products = new Products(dataProducts);

body.appendChild(header.HTML);
body.appendChild(nav.HTML);
body.appendChild(products.HTML);
