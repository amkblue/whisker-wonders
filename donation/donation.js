const nav = document.querySelector('.nav-bar');
window.addEventListener('scroll', changeNav);

function changeNav() {
    if (window.scrollY > nav.offsetHeight + 170) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}
