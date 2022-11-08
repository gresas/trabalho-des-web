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
  var positiveLikeNumber = parseInt(thumbsWrapper.find('.thumbs-up').text());
  var negativeLikeNumber = parseInt(thumbsWrapper.find('.thumbs-down').text());
  // console.log($(this).children(0))
  // can be: -1 or 0 or 1
  var thumbWrapperState = $(thumbsWrapper);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9cded6791ecfbbf5af90")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.9df46a566c4094aba2f1.hot-update.js.map