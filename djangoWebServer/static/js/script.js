
// import * as bootstrap from 'bootstrap'
// import { Product } from './entity'

let oldValue;
window.addEventListener('scroll', function(e){
    let newValue = window.pageYOffset;
    if(oldValue - newValue < 0){
        // console.log("Up");
        $("#header-logo").fadeOut();
    } else if(oldValue - newValue > 0){
        // console.log("Down");
        $("#header-logo").fadeIn();
    }
    oldValue = newValue;
});

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 2
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});

$('span.modify-qty.minus').click(function(e) {
    let inputElem = this.parentElement.querySelectorAll('input')[0]
    let inputValue = inputElem.value
    if (inputValue > 1) {
        inputElem.value = --inputValue;
    }
})

$('span.modify-qty.plus').click(function(e) {
    let inputElem = this.parentElement.querySelectorAll('input')[0]
    let inputValue = inputElem.value
    if (inputValue >= 1) {
        inputElem.value = ++inputValue;
    }
})