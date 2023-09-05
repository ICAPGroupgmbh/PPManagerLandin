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
const linkToImpressum = document.querySelectorAll('.impressum-link');
const linkToProtection = document.querySelectorAll('.protection-link');
const indexPage = document.querySelector('.index-main');
const uberPage = document.querySelector('.uber-main');
const impressumPage = document.querySelector('.impressum-main');
const protectionPage = document.querySelector('.protection-main');
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
        menuLink.forEach(link => link.classList.remove("active"))
        if (!uberPage.classList.contains("active")) {
            indexPage.classList.remove("active");
            impressumPage.classList.remove("active");
            protectionPage.classList.remove("active");
            uberPage.classList.add("active")
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

linkToImpressum.forEach(link => {
    link.addEventListener('click', () => {
        menuLink.forEach(link => link.classList.remove("active"))
        if (!impressumPage.classList.contains("active")) {
            indexPage.classList.remove("active");
            uberPage.classList.remove("active");
            protectionPage.classList.remove("active");
            impressumPage.classList.add("active");
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

linkToProtection.forEach(link => {
    link.addEventListener('click', () => {
        menuLink.forEach(link => link.classList.remove("active"))
        if (!protectionPage.classList.contains("active")) {
            indexPage.classList.remove("active");
            uberPage.classList.remove("active");
            impressumPage.classList.remove("active");
            protectionPage.classList.add("active");
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
        if (!button.classList.contains("uber-link")) {
            indexPage.classList.add("active");
            uberPage.classList.remove("active");
        }
    });
});

const mainIndex = document.querySelector(".index-main");

const acceptCookiesHandler = () => {
    document.querySelector(".banner__wrapper").classList.add("disabled");
    document.querySelector(".banner2__wrapper").classList.add("active");
}
const closeCookiesHandler = () => {
    document.querySelector(".banner__wrapper").classList.add("disabled");
    document.querySelector('.overlay').classList.remove("active");
    localStorage.setItem("protectionCookie", JSON.stringify(true));
}

const acceptProtectionHandler = () => {
    document.querySelector(".banner2__wrapper").classList.add("disabled");
    document.querySelector(".banner3__wrapper").classList.add("active");
}
const closeProtectionHandler = () => {
    document.querySelector(".banner2__wrapper").classList.remove("active");
    document.querySelector('.overlay').classList.remove("active");
    localStorage.setItem("protectionCookie", JSON.stringify(true));
}

const acceptLearnMoreHandler = () => {
    document.querySelector(".protection-main").classList.add("active");
    document.querySelector(".index-main").classList.remove("active");
    document.querySelector(".banner3__wrapper").classList.remove("active");
    document.querySelector('.overlay').classList.remove("active");
    localStorage.setItem("protectionCookie", JSON.stringify(true));
}
const closeLearnMoreHandler = () => {
    document.querySelector(".banner3__wrapper").classList.remove("active");
    document.querySelector('.overlay').classList.remove("active");
    localStorage.setItem("protectionCookie", JSON.stringify(true));
}


window.addEventListener("load", () => {
    if (JSON.parse(localStorage.getItem("protectionCookie")) !== true) {
        document.querySelector('.overlay').classList.add("active");
        mainIndex.insertAdjacentHTML("beforebegin",
            `
                <div class="banner__wrapper">
                    <div class="banner__title">Wir schätzen Ihre Privatsphäre</div>
                    <div class="banner__text">Diese Website verwendet Cookies, um Ihr Surferlebnis zu verbessern und personalisierte Inhalte bereitzustellen. Wenn Sie auf "Alle Cookies akzeptieren" klicken, stimmen Sie der Speicherung von Cookies auf Ihrem Gerät zu, um die Nutzung der Website zu analysieren, unsere Dienste zu verbessern und Ihnen relevante Werbung anzuzeigen.</div>
                    <div class="banner__btn-container">
                        <div class="banner__main-btn">Alle Cookies akzeptieren</div>
                        <div class="banner__secondary-btn-additional">
                                <a href="https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DAndroid" target="_blank">Cookie-Einstellungen</a>
                        </div>
                        <div class="banner__secondary-btn">Schließen</div>
                    </div>
                </div>
              `
        )
        document.querySelector(".banner__main-btn").addEventListener("click", acceptCookiesHandler);
        document.querySelector(".banner__secondary-btn").addEventListener("click", closeCookiesHandler);

        mainIndex.insertAdjacentHTML("beforebegin",
            `
            <div class="banner2__wrapper">
                <div class="banner2__title">Schutz Ihrer Daten</div>
                <div class="banner2__desc">Ihre Privatsphäre ist uns wichtig. Diese Website verpflichtet sich, Ihre persönlichen Daten zu schützen.</div>
                <div class="banner2__text">Seien Sie versichert, dass Ihre Privatsphäre und die Sicherheit Ihrer Daten bei uns an erster Stelle stehen. In unserer Datenschutzrichtlinie erfahren Sie, wie wir Ihre Daten erfassen, verwenden und schützen. Wenn Sie auf "Mehr erfahren" klicken oder diese Website weiter nutzen, erklären Sie sich mit unserer Datenschutzrichtlinie einverstanden.</div>
                    <div class="banner2__btn-container">
                        <div class="banner2__main-btn">Mehr erfahren</div>
                        <div class="banner2__secondary-btn">Schließen</div>
                    </div>
            </div>
                `
        )
        document.querySelector(".banner2__main-btn").addEventListener("click", acceptProtectionHandler);
        document.querySelector(".banner2__secondary-btn").addEventListener("click", closeProtectionHandler);

        mainIndex.insertAdjacentHTML("beforebegin",
            `
            <div class="banner3__wrapper">
                <div class="banner3__title">Schutz Ihrer Daten</div>
                <div class="banner3__text">Besuchen Sie unsere <span class="banner3__link">Datenschutzrichtlinie</span>,
                    um mehr darüber
                    zu erfahren, wie wir mit Ihren Daten
                    umgehen, welche Rechte Sie haben und wie Sie uns bei datenschutzrechtlichen Bedenken kontaktieren können.</div>
                <div class="banner3__btn-container">
                    <div class="banner3__main-btn">Mehr erfahren</div>
                    <div class="banner3__secondary-btn">Schließen</div>
                </div>
            </div>
                `
        )
        document.querySelector(".banner3__main-btn").addEventListener("click", acceptLearnMoreHandler);
        document.querySelector(".banner3__link").addEventListener("click", acceptLearnMoreHandler);
        document.querySelector(".banner3__secondary-btn").addEventListener("click", closeLearnMoreHandler);
    }
})

