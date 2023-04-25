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