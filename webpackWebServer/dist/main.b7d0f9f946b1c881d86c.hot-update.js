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
  var pressedBtn = $(this);
  var thumbsWrapper = pressedBtn.parent().parent();
  var thumbsList = thumbsWrapper.children().find('i');
  console.log(thumbsWrapper.children().find('i').hasClass('fa-solid'));
  var positiveLikeNumber = parseInt(thumbsWrapper.find('.thumbs-up').text());
  var negativeLikeNumber = parseInt(thumbsWrapper.find('.thumbs-down').text());
  if (thumbsList.hasClass('fa-solid')) {
    // Ja possui likes, fazer tratamento de acordo com qual botao é apertado
    var isPressedBtnRegular = pressedBtn.children(0).hasClass('fa-regular');
    if (isPressedBtnRegular) {
      console.log(pressedBtn.parent().siblings('i'));
    }
  } else {
    // não tem likes ainda, adcionar normal
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d18277ae8591c3d068ca")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.b7d0f9f946b1c881d86c.hot-update.js.map