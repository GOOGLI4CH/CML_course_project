let swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    mousewheel: true,
    grabCursor: true,
    keyboard: {
        enabled: true,
      },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
});