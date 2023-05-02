let mainSwiper = new Swiper(".swiper-container", {
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

let swiper = new Swiper(".scroll-container", {
    direction: "vertical",
    slidesPerView: "auto",
    spaceBetween: 10,
    autoHeight: true,
    freeMode: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: -5,
        stretch: 1,
        depth: 10,
        modifier: 1,
        slideShadows: true,
    },
    keyboard: {
        enabled: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    mousewheel: true,
});

let aboutSwiper = new Swiper(".halls-swiper", {
    freeMode: true,
    slidesPerView: "auto",
    loop: true,
    mousewheel: true,
    keyboard: {
        enabled: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});