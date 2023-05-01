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
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    mousewheel: true,
  });

let aboutSwiper = new Swiper(".halls-swiper", {
    freeMode: true,
    loop: true,
    effect: "fade",
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});