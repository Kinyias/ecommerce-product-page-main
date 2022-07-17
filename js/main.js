const bar = document.querySelector('.menu-left-bar');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');

const slides = document.querySelectorAll('.product-hero');
const previous = document.querySelectorAll('.previous');
const next = document.querySelectorAll('.next');

const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const counter = document.querySelector('.counter');

const cart =  document.querySelector('.menu-right-cart');
const cart_wrapper = document.querySelector('.cart-wrapper');
const btn = document.querySelector('.btn');
const cart_count = document.querySelector('.menu-right-cart-count');
const product_in_cart_shopping = document.querySelector('.product-in-cart');
const cart_empty = document.querySelector('.cart-empty');
const available_product = document.querySelector('.available-product');

const pic_thumbnail = document.querySelectorAll('.pic');

const modal = document.querySelector('.modal-overlay');
const close_modal = document.querySelector('.close-modal');
const slides_modal = document.querySelectorAll('.product-hero-modal');
const pic_thumbnail_modal = document.querySelectorAll('.pic-modal');
let slideIndex = 1; //Default value slide
let count =1; //Default value counter
let productsInCart = 0;
let price =125.00;
//Function
//Open and close navigation

function openNav(){
    nav.classList.add('active');
}
function closeNav(){
    nav.classList.remove('active');
}
//Slide

function plusSlides(){
    showSlides(slideIndex+=1);
    pic_thumbnail.forEach(e => e.classList.remove('active'))
    pic_thumbnail[slideIndex-1].classList.add('active')
    pic_thumbnail_modal.forEach(e => e.classList.remove('active'))
    pic_thumbnail_modal[slideIndex-1].classList.add('active')
}
function minusSlides(){
    showSlides(slideIndex-=1);
}
function showSlides(n){
    if(n>slides.length){slideIndex = 1};
    if(n<1){slideIndex = slides.length};
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
    slides_modal.forEach((slide) => {
        slide.classList.remove('active');
    })
    slides[slideIndex -1].classList.add('active');
    slides_modal[slideIndex -1].classList.add('active');
}
//Plus and minus counter

function plusCounter(){
    count +=1;
    counter.textContent = count;
}
function minusCounter(){
    count -=1;
    if(count<0){
        count =0;
    }
    counter.textContent = count;
}
//Open and close cart

function openCloseCart(){
    cart_wrapper.classList.toggle('hidden');
}
//Generate product cart

function addToCart(){
    productsInCart +=count;
    const productItem = 
    ` <div class="item">
            <div class="detail-wrapper">
              <img src="./images/image-product-1-thumbnail.jpg" alt="prodcut 1 thumbnail">
              <div class="detail">
                <div class="product-name">Autumn Limited Edition...</div>
                <div class="price-group">
                  <div class="price">$${price}</div>x
                  <div class="count">${productsInCart}</div>
                  <div class="total-amount">$${price*productsInCart}</div>
                </div>
            </div>
            </div>
            <div class="btn-delete"><img src="./images/icon-delete.svg" alt="delete"></div>
          </div>` 
    product_in_cart_shopping.innerHTML= productItem;
    updateCart();
    const btn_delete = document.querySelector('.btn-delete');
    btn_delete.addEventListener('click', deleteCart);
}
function updateCart(){
    updateCartIcon();
    updateCartEmpty();
    updateCartAvailableProduct();
}
function updateCartIcon(){
    cart_count.textContent = productsInCart;
    cart_count.classList.remove('hidden');
}
function updateCartEmpty(){
    cart_empty.classList.add('hidden');
}
function updateCartAvailableProduct(){
    available_product.classList.remove('hidden');
}

//Delete cart shopping

function deleteCart(){
    product_in_cart_shopping.innerHTML='';
    productsInCart = 0;
    available_product.classList.add('hidden');
    cart_empty.classList.remove('hidden');
    cart_count.classList.add('hidden');
}
//Lightbox
function currentSlide(n){
    showSlides(slideIndex = n);
    
}
function openModal(){
    modal.classList.remove('hidden');
    pic_thumbnail.forEach( e => e.classList.remove('active'));
    this.classList.add('active');
    pic_thumbnail_modal.forEach( e => e.classList.remove('active'));
    pic_thumbnail_modal[slideIndex-1].classList.add('active')
}
function closeModal(){
    modal.classList.add('hidden');
}
//Dispatch
bar.addEventListener('click',openNav);
close.addEventListener('click',closeNav);

next[0].onclick = () =>{plusSlides();}
previous[0].onclick = () => {minusSlides();}
next[1].onclick = () =>{plusSlides();}
previous[1].onclick = () => {minusSlides();}

plus.addEventListener('click',plusCounter);
minus.addEventListener('click',minusCounter);

cart.addEventListener('click', openCloseCart);

btn.addEventListener('click',addToCart);

pic_thumbnail.forEach(e => e.addEventListener('click', openModal));
close_modal.addEventListener('click', closeModal);

