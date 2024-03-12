const nav = document.querySelector('.nav-bar');
window.addEventListener('scroll', changeNav);

function changeNav() {
  if (window.scrollY > nav.offsetHeight + 170) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
