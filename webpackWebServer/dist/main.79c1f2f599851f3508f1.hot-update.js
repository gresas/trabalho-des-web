"use strict";
self["webpackHotUpdate"]("main",{

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_all_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/all.css */ "./assets/css/all.css");
/* harmony import */ var _css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/bootstrap.css */ "./assets/css/bootstrap.css");
/* harmony import */ var _css_brigadeiro_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/brigadeiro.css */ "./assets/css/brigadeiro.css");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/styles.css */ "./assets/css/styles.css");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entity */ "./assets/js/entity.js");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_entity__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _trabalho03__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trabalho03 */ "./assets/js/trabalho03.js");
/* harmony import */ var _trabalho03__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_trabalho03__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");







var oldValue;
window.addEventListener('scroll', function (e) {
  var newValue = window.pageYOffset;
  if (oldValue - newValue < 0) {
    // console.log("Up");
    $("#header-logo").fadeOut();
  } else if (oldValue - newValue > 0) {
    // console.log("Down");
    $("#header-logo").fadeIn();
  }
  oldValue = newValue;
});
var items = document.querySelectorAll('.carousel .carousel-item');
items.forEach(function (el) {
  var minPerSlide = 2;
  var next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    var cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});
$('span.modify-qty.minus').click(function (e) {
  var inputElem = this.parentElement.querySelectorAll('input')[0];
  var inputValue = inputElem.value;
  if (inputValue > 1) {
    inputElem.value = --inputValue;
  }
});
$('span.modify-qty.plus').click(function (e) {
  var inputElem = this.parentElement.querySelectorAll('input')[0];
  var inputValue = inputElem.value;
  if (inputValue >= 1) {
    inputElem.value = ++inputValue;
  }
});
function htmlToElement(html) {
  var template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstChild;
}
;
var product_template = function product_template(product) {
  return "<div class=\"col-lg-4 col-md-6 product-card\">\n           <div class=\"card\">\n              <a href=\"/produto.html\">\n                 <img class=\"card-img\" src=\"".concat(product.image, "\">\n                 <div class=\"pt-3 align-items-start justify-content-start\">\n                    <h4 class=\"card-text product-list-title\">").concat(product.title, "</h4>\n                 </div>\n              </a>\n              <div class=\"d-flex justify-content-between\">\n                 <a class=\"product-list-category\" href=\"#category-novidades\">\n                    ").concat(product.category, "\n                 </a>\n                 <span class=\"price product-price-amount\">").concat(product.price, "\u20AC</span>\n              </div>\n           </div>\n\n           <div class=\"d-flex pt-3 justify-content-center thumbs-wrapper\">\n                <div class=\"thumbs-up wrapper pl-3\">\n                    <button class=\"btn btn-lg bg-transparent\">\n                        <i class=\"fa-regular fa-thumbs-up\">0</i>\n                    </button>\n                </div>\n                <div class=\"thumbs-down wrapper pl-3\">\n                    <button class=\"btn btn-lg bg-transparent\">\n                        <i class=\"fa-regular fa-thumbs-down\">0</i>\n                    </button>\n                </div>\n            </div>\n        </div>");
};
var product1 = new _entity__WEBPACK_IMPORTED_MODULE_5__.Product('Flower Box + 12 Brigadeiros', 'Brigadeiros', '50.00', 'assets/images/', 'loja_sample4.jpeg');
var product2 = new _entity__WEBPACK_IMPORTED_MODULE_5__.Product('Number Cakes', 'Novidades', '45.00', 'assets/images/', 'loja_sample5.jpeg');
var product3 = new _entity__WEBPACK_IMPORTED_MODULE_5__.Product('Vulcão Arco-Íris', 'Bolos', '40.00', 'assets/images/', 'loja_sample6.jpg');
var products = [product1, product2, product3];
// console.log(products)

if (window.location.pathname === '/loja.html') {
  products.forEach(function (product) {
    // console.log(product)
    var html = htmlToElement(product_template(product));
    $('#product-preview')[0].appendChild(html);
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0aec2883bf8c70242b4e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.79c1f2f599851f3508f1.hot-update.js.map