/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
class Contact {
  constructor(dataContact) {
    this.title = 'CONTACTO';
    this.dir = dataContact.dir;
    this.ig = dataContact.ig;
    this.tel = dataContact.tel;
  };
  get HTML() {
    const element = document.createElement('div');
    element.classList.add('main');
    element.innerHTML =
    `<div class="title">${this.title}</div>
    <div class="info">
      <ul class="contact-items">
        <li class="contact-item"><img src="img/map.svg" alt="map-icon">${this.dir}</li>
        <li class="contact-item"><img src="img/instagram.svg" alt="instagram-icon">@${this.ig}</li>
        <li class="contact-item"><img src="img/phone.svg" alt="phone-icon">${this.tel}</li>
      </ul>
    </div>`;
    return element;
  };
};

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
class Header {
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


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
class Home {
  constructor() {
    this.title = 'SOBRE NOSOTROS';
  };
  get HTML() {
    const element = document.createElement('div');
    element.classList.add('main');
    element.innerHTML =
    `<div class="title">${this.title}</div>
    <div class="info">
      <p>
        Somos una empresa dedicada a la venta de hamburguesas.
        Nuestro negocio, que arrancó como una idea de amigos, terminó convirtiéndose
        en la fuente de ingresos de varias familias, y la opción elegida por los jóvenes
        para matar el bajón.
      </p>
      <p>
        Nos orgullece brindar productos de la mejor calidad. Y eso genera que tengamos los
        MEJORES CLIENTES, siempre apoyandonos y confiando en nosotros.
      </p>
      <p>
        Es por eso que vamos a estar siempre agradecidos, y tratamos de devolverles tanto cariño
        con SORTEOS mes a mes, descuentos y promociones.
      </p>
      <p>
        Próximamente, vamos a contar con un local físico. Tenemos muchísimas ganas de
        conocerlos, y esperamos verlos en la apertura.
      </p>
    </div>`;
    return element;
  };
};


/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
class Nav {
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


/***/ }),

/***/ "./src/products.js":
/*!*************************!*\
  !*** ./src/products.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Products)
/* harmony export */ });
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

class Products {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _products_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.js */ "./src/products.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");






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

const header = new _header_js__WEBPACK_IMPORTED_MODULE_0__["default"]('img/logo.png');
const nav = new _nav_js__WEBPACK_IMPORTED_MODULE_2__["default"](['BIENVENIDOS', 'MENU', 'CONTACTO']);
const products = new _products_js__WEBPACK_IMPORTED_MODULE_3__["default"](dataProducts);
const home = new _home_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
const contact = new _contact_js__WEBPACK_IMPORTED_MODULE_4__["default"](dataContact);


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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsV0FBVztBQUNyQztBQUNBO0FBQ0EseUVBQXlFLFNBQVM7QUFDbEYsc0ZBQXNGLFFBQVE7QUFDOUYsNkVBQTZFLFNBQVM7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixVQUFVO0FBQ3ZDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixXQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9CZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsS0FBSyxHQUFHLEtBQUs7QUFDOUQsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVO0FBQzNDLHVDQUF1QyxpQkFBaUI7QUFDeEQsc0NBQXNDLG9CQUFvQjtBQUMxRCx5Q0FBeUMsaUJBQWlCO0FBQzFELDREQUE0RCxTQUFTLEVBQUU7QUFDdkU7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05pQztBQUNKO0FBQ0Y7QUFDVTtBQUNGOztBQUVuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixrREFBTTtBQUN6QixnQkFBZ0IsK0NBQUc7QUFDbkIscUJBQXFCLG9EQUFRO0FBQzdCLGlCQUFpQixnREFBSTtBQUNyQixvQkFBb0IsbURBQU87OztBQUczQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtdG9wLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC10b3AvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtdG9wLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC10b3AvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtdG9wLy4vc3JjL3Byb2R1Y3RzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtdG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtdG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC10b3AvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFjdCB7XG4gIGNvbnN0cnVjdG9yKGRhdGFDb250YWN0KSB7XG4gICAgdGhpcy50aXRsZSA9ICdDT05UQUNUTyc7XG4gICAgdGhpcy5kaXIgPSBkYXRhQ29udGFjdC5kaXI7XG4gICAgdGhpcy5pZyA9IGRhdGFDb250YWN0LmlnO1xuICAgIHRoaXMudGVsID0gZGF0YUNvbnRhY3QudGVsO1xuICB9O1xuICBnZXQgSFRNTCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPVxuICAgIGA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3RoaXMudGl0bGV9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgIDx1bCBjbGFzcz1cImNvbnRhY3QtaXRlbXNcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwiY29udGFjdC1pdGVtXCI+PGltZyBzcmM9XCJpbWcvbWFwLnN2Z1wiIGFsdD1cIm1hcC1pY29uXCI+JHt0aGlzLmRpcn08L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJjb250YWN0LWl0ZW1cIj48aW1nIHNyYz1cImltZy9pbnN0YWdyYW0uc3ZnXCIgYWx0PVwiaW5zdGFncmFtLWljb25cIj5AJHt0aGlzLmlnfTwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImNvbnRhY3QtaXRlbVwiPjxpbWcgc3JjPVwiaW1nL3Bob25lLnN2Z1wiIGFsdD1cInBob25lLWljb25cIj4ke3RoaXMudGVsfTwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PmA7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XG4gIGNvbnN0cnVjdG9yKHVybCkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9O1xuICBnZXQgSFRNTCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9XG4gICAgYDxpbWcgY2xhc3M9XCJsb2dvXCIgc3JjPSR7dGhpcy51cmx9IGFsdD1cImxvZ29cIj5gO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRpdGxlID0gJ1NPQlJFIE5PU09UUk9TJztcbiAgfTtcbiAgZ2V0IEhUTUwoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID1cbiAgICBgPGRpdiBjbGFzcz1cInRpdGxlXCI+JHt0aGlzLnRpdGxlfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICA8cD5cbiAgICAgICAgU29tb3MgdW5hIGVtcHJlc2EgZGVkaWNhZGEgYSBsYSB2ZW50YSBkZSBoYW1idXJndWVzYXMuXG4gICAgICAgIE51ZXN0cm8gbmVnb2NpbywgcXVlIGFycmFuY8OzIGNvbW8gdW5hIGlkZWEgZGUgYW1pZ29zLCB0ZXJtaW7DsyBjb252aXJ0acOpbmRvc2VcbiAgICAgICAgZW4gbGEgZnVlbnRlIGRlIGluZ3Jlc29zIGRlIHZhcmlhcyBmYW1pbGlhcywgeSBsYSBvcGNpw7NuIGVsZWdpZGEgcG9yIGxvcyBqw7N2ZW5lc1xuICAgICAgICBwYXJhIG1hdGFyIGVsIGJhasOzbi5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBOb3Mgb3JndWxsZWNlIGJyaW5kYXIgcHJvZHVjdG9zIGRlIGxhIG1lam9yIGNhbGlkYWQuIFkgZXNvIGdlbmVyYSBxdWUgdGVuZ2Ftb3MgbG9zXG4gICAgICAgIE1FSk9SRVMgQ0xJRU5URVMsIHNpZW1wcmUgYXBveWFuZG9ub3MgeSBjb25maWFuZG8gZW4gbm9zb3Ryb3MuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgRXMgcG9yIGVzbyBxdWUgdmFtb3MgYSBlc3RhciBzaWVtcHJlIGFncmFkZWNpZG9zLCB5IHRyYXRhbW9zIGRlIGRldm9sdmVybGVzIHRhbnRvIGNhcmnDsW9cbiAgICAgICAgY29uIFNPUlRFT1MgbWVzIGEgbWVzLCBkZXNjdWVudG9zIHkgcHJvbW9jaW9uZXMuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgUHLDs3hpbWFtZW50ZSwgdmFtb3MgYSBjb250YXIgY29uIHVuIGxvY2FsIGbDrXNpY28uIFRlbmVtb3MgbXVjaMOtc2ltYXMgZ2FuYXMgZGVcbiAgICAgICAgY29ub2NlcmxvcywgeSBlc3BlcmFtb3MgdmVybG9zIGVuIGxhIGFwZXJ0dXJhLlxuICAgICAgPC9wPlxuICAgIDwvZGl2PmA7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2IHtcbiAgY29uc3RydWN0b3IobmF2SXRlbXMpIHtcbiAgICB0aGlzLm5hdkl0ZW1zID0gbmF2SXRlbXM7XG4gIH07XG4gIGdldCBIVE1MKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBcbiAgICB0aGlzLm5hdkl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgIHJldHVybiBgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIiBkYXRhLWxheW91dD0ke2l0ZW19PiR7aXRlbX08L2xpPmA7XG4gICAgfSkuam9pbignJyk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG59O1xuIiwiY2xhc3MgUHJvZHVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3REYXRhKSB7XG4gICAgdGhpcy5uYW1lID0gcHJvZHVjdERhdGEubmFtZSB8fCAnUHJvZHVjdG8gWCc7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb2R1Y3REYXRhLmRlc2NyaXB0aW9uIHx8ICdDYXJnYW5kbyBkZXNjcmlwY2nDs24uLi4nO1xuICAgIHRoaXMuaW1nID0gcHJvZHVjdERhdGEuaW1nIHx8ICcnO1xuICAgIHRoaXMuYWN0dWFsUHJpY2UgPSBwcm9kdWN0RGF0YS5hY3R1YWxQcmljZSB8fCAnLSc7XG4gICAgdGhpcy5wcmV2UHJpY2UgPSBwcm9kdWN0RGF0YS5wcmV2UHJpY2UgfHwgJyc7XG4gIH07XG4gIGdldFByZXZQcmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmV2UHJpY2UgPyBgJCR7dGhpcy5wcmV2UHJpY2V9YCA6ICcnO1xuICB9O1xuICBnZXQgSFRNTCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0Jyk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPVxuICAgIGA8ZGl2IGNsYXNzPVwicHJvZHVjdC1uYW1lXCI+JHt0aGlzLm5hbWV9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtZGVzY3JpcHRpb25cIj4ke3RoaXMuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcHJldi1wcmljZVwiPiR7dGhpcy5nZXRQcmV2UHJpY2UoKX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1hY3R1YWwtcHJpY2VcIj4kJHt0aGlzLmFjdHVhbFByaWNlfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWltZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGhpcy5pbWd9KTtcIj48L2Rpdj5gO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdHMge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0cykge1xuICAgIHRoaXMudGl0bGUgPSAnTlVFU1RSQVMgQlVSR1VFUlMnO1xuICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cyB8fCBbXTtcbiAgfTtcbiAgZ2V0IEhUTUwoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBbXTtcbiAgICBjb250ZW50LnB1c2goYDxkaXYgY2xhc3M9XCJ0aXRsZVwiPiR7dGhpcy50aXRsZX08L2Rpdj5gKTtcbiAgICB0aGlzLnByb2R1Y3RzLmZvckVhY2gocHJvZHVjdERhdGEgPT4ge1xuICAgICAgY29uc3QgcHJvZHVjdCA9IG5ldyBQcm9kdWN0KHByb2R1Y3REYXRhKTtcbiAgICAgIGNvbnRlbnQucHVzaChwcm9kdWN0LkhUTUwub3V0ZXJIVE1MKTtcbiAgICB9KTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQuam9pbignJyk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyLmpzJztcbmltcG9ydCBIb21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgTmF2IGZyb20gJy4vbmF2LmpzJztcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuL3Byb2R1Y3RzLmpzJztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmNvbnN0IGRhdGFQcm9kdWN0cyA9IFtcbiAge1xuICAgIG5hbWU6ICdDbGFzc2ljIENoZWVzZSAoY29uIHBhcGFzKScsXG4gICAgZGVzY3JpcHRpb246ICdNZWRhbGzDs24gZGUgY2FybmUgZGUgMTYwZ3IsIGRvYmxlIGNoZWRkYXInLFxuICAgIHByZXZQcmljZTogJzkwMCcsXG4gICAgYWN0dWFsUHJpY2U6ICc4MTAnLFxuICAgIGltZzogJ2ltZy9wcm9kdWN0cy8xNjExODkuanBlZycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQ2xhc3NpYyBCYWNvbiAoY29uIHBhcGFzKScsXG4gICAgZGVzY3JpcHRpb246ICdNZWRhbGzDs24gZGUgY2FybmUgZGUgMTYwZ3IsIGRvYmxlIGNoZWRkYXIgeSBkb2JsZSBwYW5jZXRhJyxcbiAgICBhY3R1YWxQcmljZTogJzk1MCcsXG4gICAgaW1nOiAnaW1nL3Byb2R1Y3RzLzE2MTE5MC5qcGVnJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdPbmlvbiBDcmF6eSAoY29uIHBhcGFzKScsXG4gICAgZGVzY3JpcHRpb246ICdNZWRhbGzDs24gZGUgY2FybmUgZGUgMTUwZ3IsIGNlYm9sbGEgY2FyYW1lbGl6YWRhIHkgZG9ibGUgY2hlZGRhcicsXG4gICAgYWN0dWFsUHJpY2U6ICc5NDAnLFxuICAgIGltZzogJ2ltZy9wcm9kdWN0cy8xNjExOTEuanBlZycsXG4gIH0sXG5dO1xuXG5jb25zdCBkYXRhQ29udGFjdCA9IHtcbiAgZGlyOiAnQ29zcXXDrW4gMTk4LCBMb21hcyBkZSBaYW1vcmEnLFxuICBpZzogJ2J1cmd1ZXJzdXJfXycsXG4gIHRlbDogJzExIDY3MjEtOTQ4MycsXG59O1xuXG5mdW5jdGlvbiBjbGVhckFjdGl2ZUl0ZW1zKCkge1xuICBjb25zdCBuYXZJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1pdGVtJykpO1xuICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gY2xlYXJNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgaWYoIW1haW4pIHJldHVybjtcbiAgbWFpbi5yZW1vdmUoKTtcbn07XG5cbmZ1bmN0aW9uIHNob3dMYXlvdXQoaXRlbSwgZGljdExheW91dHMpIHtcbiAgaWYoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gIGNsZWFyQWN0aXZlSXRlbXMoKTtcbiAgY2xlYXJNYWluKCk7XG4gIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGljdExheW91dHNbaXRlbS5kYXRhc2V0LmxheW91dF0uSFRNTCk7XG59O1xuXG5jb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVyKCdpbWcvbG9nby5wbmcnKTtcbmNvbnN0IG5hdiA9IG5ldyBOYXYoWydCSUVOVkVOSURPUycsICdNRU5VJywgJ0NPTlRBQ1RPJ10pO1xuY29uc3QgcHJvZHVjdHMgPSBuZXcgUHJvZHVjdHMoZGF0YVByb2R1Y3RzKTtcbmNvbnN0IGhvbWUgPSBuZXcgSG9tZSgpO1xuY29uc3QgY29udGFjdCA9IG5ldyBDb250YWN0KGRhdGFDb250YWN0KTtcblxuXG5ib2R5LmFwcGVuZENoaWxkKGhlYWRlci5IVE1MKTtcbmJvZHkuYXBwZW5kQ2hpbGQobmF2LkhUTUwpO1xuXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbGF5b3V0PVwiTUVOVVwiXScpO1xuXG5jb25zdCBkaWN0TGF5b3V0cyA9IHtcbiAgJ0JJRU5WRU5JRE9TJzogaG9tZSxcbiAgJ01FTlUnOiBwcm9kdWN0cyxcbiAgJ0NPTlRBQ1RPJzogY29udGFjdCxcbn07XG5cbnNob3dMYXlvdXQobWVudUJ1dHRvbiwgZGljdExheW91dHMpO1xuXG5BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtaXRlbScpKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIHNob3dMYXlvdXQoZS50YXJnZXQsIGRpY3RMYXlvdXRzKTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==