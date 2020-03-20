var mySwiper = new Swiper ('.slider-1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    },

  });

  var mySwiper = new Swiper ('.slider-2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 150,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 200,
      },

      1440: {
        slidesPerView: 3,
        spaceBetween: 320,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })