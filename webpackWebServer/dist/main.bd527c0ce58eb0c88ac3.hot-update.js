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
  var pressedBtnElem = pressedBtn.find('i');
  if (thumbsList.hasClass('fa-solid')) {
    // Ja possui likes, fazer tratamento de acordo com qual botao é apertado
    var isPressedBtnRegular = pressedBtn.children(0).hasClass('fa-regular');
    if (isPressedBtnRegular) {
      var pressedBtnSiblingElem = pressedBtn.parent().siblings('.wrapper').find('i');
      pressedBtnSiblingElem.removeClass('fa-solid').addClass('fa-regular');
      pressedBtnSiblingElem.text(parseInt(pressedBtnSiblingElem.text()) - 1);
      pressedBtnElem.removeClass('fa-regular').addClass('fa-solid');
      pressedBtnElem.text(parseInt(pressedBtnElem.text()) + 1);
    } else {
      pressedBtnElem.removeClass('fa-solid').addClass('fa-regular');
      pressedBtnElem.text(parseInt(pressedBtnElem.text()) - 1);
    }
  } else {
    // não tem likes ainda, adcionar normal
    pressedBtnElem.removeClass('fa-regular').addClass('fa-solid');
    pressedBtnElem.text(parseInt(pressedBtnElem.text()) + 1);
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9e68efa51bbdcc81017e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.bd527c0ce58eb0c88ac3.hot-update.js.map