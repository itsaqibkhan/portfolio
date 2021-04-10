
/* For Swipper */
var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      640: {
        slidesPerView: 3,
        spaceBetween:10,
      }
    },
  });