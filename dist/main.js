/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _products_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.js */ "./src/products.js");




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
  console.log(main);
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
const nav = new _nav_js__WEBPACK_IMPORTED_MODULE_1__["default"](['BIENVENIDOS', 'MENU', 'CONTACTO']);
const products = new _products_js__WEBPACK_IMPORTED_MODULE_2__["default"](dataProducts);

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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsVUFBVTtBQUN2QztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1hlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxLQUFLLEdBQUcsS0FBSztBQUM5RCxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVO0FBQzNDLHVDQUF1QyxpQkFBaUI7QUFDeEQsc0NBQXNDLG9CQUFvQjtBQUMxRCx5Q0FBeUMsaUJBQWlCO0FBQzFELDREQUE0RCxTQUFTLEVBQUU7QUFDdkU7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ25EQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOaUM7QUFDTjtBQUNVOztBQUVyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixrREFBTTtBQUN6QixnQkFBZ0IsK0NBQUc7QUFDbkIscUJBQXFCLG9EQUFROztBQUU3QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtdG9wLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXRvcC8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC10b3AvLi9zcmMvcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC10b3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC10b3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtdG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC10b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXRvcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xuICBjb25zdHJ1Y3Rvcih1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfTtcbiAgZ2V0IEhUTUwoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPVxuICAgIGA8aW1nIGNsYXNzPVwibG9nb1wiIHNyYz0ke3RoaXMudXJsfSBhbHQ9XCJsb2dvXCI+YDtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOYXYge1xuICBjb25zdHJ1Y3RvcihuYXZJdGVtcykge1xuICAgIHRoaXMubmF2SXRlbXMgPSBuYXZJdGVtcztcbiAgfTtcbiAgZ2V0IEhUTUwoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCduYXYnKTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IFxuICAgIHRoaXMubmF2SXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIGA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiIGRhdGEtbGF5b3V0PSR7aXRlbX0+JHtpdGVtfTwvbGk+YDtcbiAgICB9KS5qb2luKCcnKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcbn07XG4iLCIvKlxuPGRpdiBjbGFzcz1cInRpdGxlXCI+TlVFU1RSQVMgQlVSR1VFUlM8L2Rpdj5cbjxkaXYgY2xhc3M9XCJwcm9kdWN0XCI+XG4gIDxkaXYgY2xhc3M9XCJwcm9kdWN0LW5hbWVcIj5DbGFzc2ljIENoZWVzZSAoY29uIHBhcGFzKTwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1kZXNjcmlwdGlvblwiPk1lZGFsbMOzbiBkZSBjYXJuZSAxNjBnciwgZG9ibGUgY2hlZGRhcjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1wcmV2LXByaWNlXCI+JDkwMDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1hY3R1YWwtcHJpY2VcIj4kODEwPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWltZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWcvcHJvZHVjdHMvMTYxMTg5LmpwZWcnKTtcIj48L2Rpdj5cbjwvZGl2PlxuKi9cbmNsYXNzIFByb2R1Y3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0RGF0YSkge1xuICAgIHRoaXMubmFtZSA9IHByb2R1Y3REYXRhLm5hbWUgfHwgJ1Byb2R1Y3RvIFgnO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9kdWN0RGF0YS5kZXNjcmlwdGlvbiB8fCAnQ2FyZ2FuZG8gZGVzY3JpcGNpw7NuLi4uJztcbiAgICB0aGlzLmltZyA9IHByb2R1Y3REYXRhLmltZyB8fCAnJztcbiAgICB0aGlzLmFjdHVhbFByaWNlID0gcHJvZHVjdERhdGEuYWN0dWFsUHJpY2UgfHwgJy0nO1xuICAgIHRoaXMucHJldlByaWNlID0gcHJvZHVjdERhdGEucHJldlByaWNlIHx8ICcnO1xuICB9O1xuICBnZXRQcmV2UHJpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJldlByaWNlID8gYCQke3RoaXMucHJldlByaWNlfWAgOiAnJztcbiAgfTtcbiAgZ2V0IEhUTUwoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvZHVjdCcpO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID1cbiAgICBgPGRpdiBjbGFzcz1cInByb2R1Y3QtbmFtZVwiPiR7dGhpcy5uYW1lfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWRlc2NyaXB0aW9uXCI+JHt0aGlzLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LXByZXYtcHJpY2VcIj4ke3RoaXMuZ2V0UHJldlByaWNlKCl9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtYWN0dWFsLXByaWNlXCI+JCR7dGhpcy5hY3R1YWxQcmljZX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pbWdcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke3RoaXMuaW1nfSk7XCI+PC9kaXY+YDtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RzIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdHMpIHtcbiAgICB0aGlzLnRpdGxlID0gJ05VRVNUUkFTIEJVUkdVRVJTJztcbiAgICB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHMgfHwgW107XG4gIH07XG4gIGdldCBIVE1MKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBjb25zdCBjb250ZW50ID0gW107XG4gICAgY29udGVudC5wdXNoKGA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3RoaXMudGl0bGV9PC9kaXY+YCk7XG4gICAgdGhpcy5wcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3REYXRhID0+IHtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBuZXcgUHJvZHVjdChwcm9kdWN0RGF0YSk7XG4gICAgICBjb250ZW50LnB1c2gocHJvZHVjdC5IVE1MLm91dGVySFRNTCk7XG4gICAgfSk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50LmpvaW4oJycpO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci5qcyc7XG5pbXBvcnQgTmF2IGZyb20gJy4vbmF2LmpzJztcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuL3Byb2R1Y3RzLmpzJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuY29uc3QgZGF0YVByb2R1Y3RzID0gW1xuICB7XG4gICAgbmFtZTogJ0NsYXNzaWMgQ2hlZXNlIChjb24gcGFwYXMpJyxcbiAgICBkZXNjcmlwdGlvbjogJ01lZGFsbMOzbiBkZSBjYXJuZSBkZSAxNjBnciwgZG9ibGUgY2hlZGRhcicsXG4gICAgcHJldlByaWNlOiAnOTAwJyxcbiAgICBhY3R1YWxQcmljZTogJzgxMCcsXG4gICAgaW1nOiAnaW1nL3Byb2R1Y3RzLzE2MTE4OS5qcGVnJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdDbGFzc2ljIEJhY29uIChjb24gcGFwYXMpJyxcbiAgICBkZXNjcmlwdGlvbjogJ01lZGFsbMOzbiBkZSBjYXJuZSBkZSAxNjBnciwgZG9ibGUgY2hlZGRhciB5IGRvYmxlIHBhbmNldGEnLFxuICAgIGFjdHVhbFByaWNlOiAnOTUwJyxcbiAgICBpbWc6ICdpbWcvcHJvZHVjdHMvMTYxMTkwLmpwZWcnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ09uaW9uIENyYXp5IChjb24gcGFwYXMpJyxcbiAgICBkZXNjcmlwdGlvbjogJ01lZGFsbMOzbiBkZSBjYXJuZSBkZSAxNTBnciwgY2Vib2xsYSBjYXJhbWVsaXphZGEgeSBkb2JsZSBjaGVkZGFyJyxcbiAgICBhY3R1YWxQcmljZTogJzk0MCcsXG4gICAgaW1nOiAnaW1nL3Byb2R1Y3RzLzE2MTE5MS5qcGVnJyxcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIGNsZWFyQWN0aXZlSXRlbXMoKSB7XG4gIGNvbnN0IG5hdkl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWl0ZW0nKSk7XG4gIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBjbGVhck1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICBpZighbWFpbikgcmV0dXJuO1xuICBjb25zb2xlLmxvZyhtYWluKTtcbiAgbWFpbi5yZW1vdmUoKTtcbn07XG5cbmZ1bmN0aW9uIHNob3dMYXlvdXQoaXRlbSwgZGljdExheW91dHMpIHtcbiAgaWYoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gIGNsZWFyQWN0aXZlSXRlbXMoKTtcbiAgY2xlYXJNYWluKCk7XG4gIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGljdExheW91dHNbaXRlbS5kYXRhc2V0LmxheW91dF0uSFRNTCk7XG59O1xuXG5jb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVyKCdpbWcvbG9nby5wbmcnKTtcbmNvbnN0IG5hdiA9IG5ldyBOYXYoWydCSUVOVkVOSURPUycsICdNRU5VJywgJ0NPTlRBQ1RPJ10pO1xuY29uc3QgcHJvZHVjdHMgPSBuZXcgUHJvZHVjdHMoZGF0YVByb2R1Y3RzKTtcblxuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIuSFRNTCk7XG5ib2R5LmFwcGVuZENoaWxkKG5hdi5IVE1MKTtcblxuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxheW91dD1cIk1FTlVcIl0nKTtcblxuY29uc3QgZGljdExheW91dHMgPSB7XG4gICdCSUVOVkVOSURPUyc6IHByb2R1Y3RzLFxuICAnTUVOVSc6IHByb2R1Y3RzLFxuICAnQ09OVEFDVE8nOiBwcm9kdWN0cyxcbn07XG5cbnNob3dMYXlvdXQobWVudUJ1dHRvbiwgZGljdExheW91dHMpO1xuXG5BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtaXRlbScpKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIHNob3dMYXlvdXQoZS50YXJnZXQsIGRpY3RMYXlvdXRzKTtcbiAgfSk7XG59KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9