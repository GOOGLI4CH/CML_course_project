let swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 15,
    freeMode: true,
    mousewheel: true,
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