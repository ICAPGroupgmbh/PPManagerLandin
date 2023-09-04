const burgerButton = document.querySelector(".header__menu-btn"), headerNav = document.querySelector(".header__menu"),
    burgerMenu = () => {
        burgerButton.addEventListener("click", () => {
            burgerButton.classList.toggle("open"), headerNav.classList.toggle("active")
        })
    };
burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("open"), headerNav.classList.toggle("active")
}), window.addEventListener("resize", () => {
    window.innerWidth > 660 && (burgerButton.classList.remove("open"), headerNav.classList.remove("active"))
});
const swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: !0,
        pagination: {el: ".swiper-pagination", clickable: !0}
    }), linkToUber = document.querySelectorAll(".uber-link"), indexPage = document.querySelector(".index-main"),
    uberPage = document.querySelector(".uber-main"), menuLink = document.querySelectorAll(".header__menu-item"),
    header__logo = document.querySelector(".header__logo");
header__logo.addEventListener("click", e => {
    e.preventDefault(), indexPage.classList.add("active"), uberPage.classList.remove("active"), menuLink.forEach(e => e.classList.remove("active"))
}), linkToUber.forEach(e => {
    e.addEventListener("click", () => {
        indexPage.classList.contains("active") ? (indexPage.classList.remove("active"), uberPage.classList.add("active")) : (indexPage.classList.add("active"), uberPage.classList.remove("active")), window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}), menuLink.forEach(e => {
    e.addEventListener("click", t => {
        menuLink.forEach(e => e.classList.remove("active")), e.classList.add("active"), headerNav.classList.remove("active"), burgerButton.classList.toggle("open"), e.classList.contains("uber-link") || (indexPage.classList.add("active"), uberPage.classList.remove("active"))
    })
});