var swiper = new Swiper(".brand-slider", {
    spaceBetween: 10,
    loop: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        1200: {
            slidesPerView: 1,
        },
    },
});
//console.log('test');