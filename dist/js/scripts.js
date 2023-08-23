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




const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});




const linkToUber = document.querySelectorAll('.uber-link');
const indexPage = document.querySelector('.index-main');
const uberPage = document.querySelector('.uber-main');
const menuLink = document.querySelectorAll('.header__menu-item');
const header__logo = document.querySelector('.header__logo');



header__logo.addEventListener('click', (e) => {
    e.preventDefault();
    indexPage.classList.add("active");
    uberPage.classList.remove("active");
    menuLink.forEach(btn => btn.classList.remove('active'));
});



linkToUber.forEach(link => {
    link.addEventListener('click', () => {
        if (indexPage.classList.contains("active")){
            indexPage.classList.remove("active");
            uberPage.classList.add("active")
        } else {
            indexPage.classList.add("active");
            uberPage.classList.remove("active")
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

menuLink.forEach(button => {
    button.addEventListener('click', (e) => {
        menuLink.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        headerNav.classList.remove('active');
        burgerButton.classList.toggle('open');
    });
});
