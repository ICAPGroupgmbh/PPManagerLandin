const burgerButton = document.querySelector('.header__menu-btn');
const headerNav = document.querySelector('.header__menu');

const burgerMenu = () => {
    burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('open');
        headerNav.classList.toggle('active');
    })
}
burgerMenu();

window.addEventListener('resize', () => {
    if (window.innerWidth > 660) {
        burgerButton.classList.remove('open');
        headerNav.classList.remove('active');
    }
});



const links = document.querySelectorAll('a');

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    })
})


const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

