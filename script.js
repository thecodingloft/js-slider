const imgSwiperOne = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    centeredSlides: true,
    grabcursor: true,
    loop: true,
    preloadImages: true,
    


    breakpoints: {
        
        300: {
            slidesPerView: 1.5,
            spaceBetween: 15,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        1280: {
            slidesPerView: 4,
            spaceBetween: 30,
        },

        1920: {
            slidesPerView: 5,
            spaceBetween: 50,
        }

    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }

})