/*
<div class="title">NUESTRAS BURGUERS</div>
<div class="product">
  <div class="product-name">Classic Cheese (con papas)</div>
  <div class="product-description">Medallón de carne 160gr, doble cheddar</div>
  <div class="product-prev-price">$900</div>
  <div class="product-actual-price">$810</div>
  <div class="product-img" style="background-image: url('img/products/161189.jpeg');"></div>
</div>
*/
class Product {
  constructor(productData) {
    this.name = productData.name || 'Producto X';
    this.description = productData.description || 'Cargando descripción...';
    this.img = productData.img || '';
    this.actualPrice = productData.actualPrice || '-';
    this.prevPrice = productData.prevPrice || '';
  };
  getPrevPrice() {
    return this.prevPrice ? `$${this.prevPrice}` : '';
  };
  get HTML() {
    const element = document.createElement('div');
    element.classList.add('product');
    element.innerHTML =
    `<div class="product-name">${this.name}</div>
    <div class="product-description">${this.description}</div>
    <div class="product-prev-price">${this.getPrevPrice()}</div>
    <div class="product-actual-price">$${this.actualPrice}</div>
    <div class="product-img" style="background-image: url(${this.img});"></div>`;
    return element;
  };
};

export default class Products {
  constructor(products) {
    this.title = 'NUESTRAS BURGUERS';
    this.products = products || [];
  };
  get HTML() {
    const element = document.createElement('div');
    element.classList.add('main');
    const content = [];
    content.push(`<div class="title">${this.title}</div>`);
    this.products.forEach(productData => {
      const product = new Product(productData);
      content.push(product.HTML.outerHTML);
    });
    element.innerHTML = content.join('');
    return element;
  };
};
