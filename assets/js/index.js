import '../css/all.css';
import '../css/bootstrap.css';
import '../css/brigadeiro.css';
import '../css/styles.css';
import * as bootstrap from 'bootstrap'
import { Product } from './entity'

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

function htmlToElement(html) {
    let template = document.createElement('template');
    template.innerHTML = html;
    return template.content.firstChild;
};

let product_template = (product) => {
    return `<div class="col-lg-4 col-md-6 product-card">
           <div class="card">
              <a href="/produto.html">
                 <img class="card-img" src="${product.image}">
                 <div class="pt-3 align-items-start justify-content-start">
                    <h4 class="card-text product-list-title">${product.title}</h4>
                 </div>
              </a>
              <div class="d-flex justify-content-between">
                 <a class="product-list-category" href="#category-novidades">
                    ${product.category}
                 </a>
                 <span class="price product-price-amount">${product.price}€</span>
              </div>
           </div>
        </div>`
};

let product1 = new Product('Flower Box + 12 Brigadeiros', 'Brigadeiros', '50.00', 'assets/images/', 'loja_sample4.jpeg');
let product2 = new Product('Number Cakes', 'Novidades', '45.00', 'assets/images/', 'loja_sample5.jpeg');
let product3 = new Product('Vulcão Arco-Íris', 'Bolos', '40.00', 'assets/images/', 'loja_sample6.jpg');

let products = [product1, product2, product3];
// console.log(products)

if (window.location.pathname === '/loja.html') {
    products.forEach((product) => {
        // console.log(product)
        let html = htmlToElement(product_template(product));
        $('#product-preview')[0].appendChild(html);
    })
}
