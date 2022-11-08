self["webpackHotUpdate"]("main",{

/***/ "./assets/js/trabalho03.js":
/*!*********************************!*\
  !*** ./assets/js/trabalho03.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function classNameContains(node) {
  // console.log(node);
  // $(node).hasClass()
}
$(".thumbs-wrapper").on('click', '.btn', function () {
  var thumbsWrapper = $(this).parent().parent();
  console.log(this);
  var positiveLikeNumber = thumbsWrapper.find('.thumbs-up').text();
  var negativeLikeNumber = thumbsWrapper.find('.thumbs-down').text();
  // console.log($(this).children(0))
  // can be: -1 or 0 or 1
  var thumbWrapperState = $(this);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4ba605aaccfa98e0fa36")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.81d37ea4c3a8abb596ea.hot-update.js.map