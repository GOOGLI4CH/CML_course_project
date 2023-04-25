let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('mobile');
}
else {
    document.body.classList.add('pc');
}

const menuIcon = document.querySelector('.menu__icon');
if (menuIcon) {
    const menuBody = document.querySelector('.menu__body');
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle('active');
        menuBody.classList.toggle('active');
        document.body.classList.toggle('lock');
    });
}

export function ModalWindow() {

    let active = false;

    const popupLinks = document.querySelectorAll('.popup-link');
    if (popupLinks.length > 0) {
        const popup = document.querySelector('.popup');
        popupLinks.forEach((popupLinks) => {
            popupLinks.addEventListener('click', (e) => {
                popup.classList.add('active');
                document.body.classList.add('lock');
                e.preventDefault();
                active = true;
            });
        });
    }

    if (active) {
        const close = document.querySelector('.popupClose');
        close.addEventListener('click', (e) => {
            popup.classList.remove('active');
            document.body.classList.remove('lock');
            e.preventDefault();
            active = false;
        });
    }
}