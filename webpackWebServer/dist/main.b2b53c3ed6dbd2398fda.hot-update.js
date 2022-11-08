self["webpackHotUpdate"]("main",{

/***/ "./assets/js/trabalho03.js":
/*!*********************************!*\
  !*** ./assets/js/trabalho03.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function classNameContains(node) {
  console.log(node);
  // $(node).hasClass()
}

$(".thumbs-wrapper").on('click', '.btn', function () {
  console.log($(this).parent());
  var positiveLikeNumber = 0;
  var negativeLikeNumber = 0;
  console.log($(this).children(0));
  // can be: -1 or 0 or 1
  var thumbWrapperState = $(this);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d527590db72d0cdb691f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.b2b53c3ed6dbd2398fda.hot-update.js.map