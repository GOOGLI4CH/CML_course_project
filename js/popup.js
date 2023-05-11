export function ModalWindow() {

    let active = false;

    const popupLinks = document.querySelectorAll('.popup-link');
    if (popupLinks.length > 0) {
        const popup = document.querySelector('.popup');
        const close = document.querySelector('.popup__close');
        popupLinks.forEach((popupLinks) => {
            popupLinks.addEventListener('click', (e) => {
                OpenWindow(active, e, popup);
                active = true;
            });
            close.addEventListener('click', (e) => {
                CloseWindow(active, e, popup);
                active = false;
            });
        });
    }

    function OpenWindow(active, e, popup) {
        if (!active) {
            e.preventDefault();
            popup.classList.add('active');
            document.body.classList.add('lock');
        }
    }

    function CloseWindow(active, e, popup) {
        setTimeout(() => {
            document.body.classList.remove('lock');
        }, 300);
        if (active) {
            e.preventDefault();
            popup.classList.remove('active');
        }
    }
}