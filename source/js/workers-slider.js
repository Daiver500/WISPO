const sliderBlock = document.querySelector('.workers-slider');

const workersSlider = () => {
  let swiper;
  if (!sliderBlock) {
    return;
  } else {

    swiper = new Swiper('.workers-slider', {
      grabCursor: true,
      spaceBetween: 18,
      // centeredSlides: true,
      navigation: {
        nextEl: '.workers-btn-right',
        prevEl: '.workers-btn-left',
      },
      pagination: {
        el: ('.swiper-pagination'),
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        1920: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 33.5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20.4,
        },
        0: {
          slidesPerView: 'auto',
          spaceBetween: 20.4,
        },
      },
    });
  }
};

export {workersSlider};
