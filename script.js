// add shadow to navbar on scroll
window.addEventListener("scroll", (e) => {
    const navbar = document.querySelector("#navbar");
    if (window.pageYOffset > 20) {
        navbar.classList.add("navbar-shadow");
    } else {
        navbar.classList.remove("navbar-shadow");
    }
});
// make nav menu active on click on the hambuger
const hamburger = document.querySelector("#navbar-hamburger");
const navMenu = document.querySelector("#navbar-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
