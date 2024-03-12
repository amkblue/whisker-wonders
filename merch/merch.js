 

    //size checkbox only one is checked 
    $(document).ready(function() {
      $('.s-checkbox').on('change', function() {
      $('.s-checkbox').not(this).prop('checked', false);
      });
    });

    //color checkbox only one is checked
    $(document).ready(function() {
      $('.c-checkbox').on('change', function() {
      $('.c-checkbox').not(this).prop('checked', false);
      });
    });

    $(document).ready(function() {
    const minus = $('.quantity__minus');
    const plus = $('.quantity__plus');
  const input = $('.quantity__input');
  minus.click(function(e) {
    e.preventDefault();
    var value = input.val();
    if (value > 1) {
      value--;
    }
    input.val(value);
  });
  
  plus.click(function(e) {
    e.preventDefault();
    var value = input.val();
    value++;
    input.val(value);
  })
});

    //swiper script 
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
      450: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      820: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      },
    });
 
