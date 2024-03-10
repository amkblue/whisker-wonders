
/* fixed nav bar active
   sticky nav bar from udemy course */
const nav = document.querySelector('.nav-bar'); // declare variable called nav has the selected element with class .nav-bar
window.addEventListener('scroll', changeNav); // when the window is scrolled, the event handler, changeNav function, will get executed

// if the window is scrolled past the height of the nav bar + 170 pixels,
// then the active class will be added to the nav bar
// else the active class will be removed from the nav bar
function changeNav() {
    if (window.scrollY > nav.offsetHeight + 170) {
        nav.classList.add('active');
    }
    else {
        nav.classList.remove('active');
    }
}



/* pink hearts effect on header 
   double click heart from udemy course */
const header = document.getElementById('header');
   
header.addEventListener('dblclick', (e) => {
    createHeart(e);
});
   
const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fa-solid');
    heart.classList.add('fa-heart');
   
    const x = e.clientX;
    const y = e.clientY;
   
    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;
   
    const xInside = x - leftOffset;
    const yInside = y - topOffset;
   
    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;
   
    header.appendChild(heart);
}
   
/* add to cart functionality */
const addCartButton = document.querySelectorAll('.add-to-cart-button');
const cartCount = document.getElementById('count');
   
let num = 0;
addCartButton.forEach((button) => {
    button.addEventListener('click', () => {
        num++;
        cartCount.innerHTML = num;
    })
})