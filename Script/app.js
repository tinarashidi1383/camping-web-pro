
const navBtn = document.querySelector(".nav_btn")
const navMenu = document.querySelector(".nav_menu")


let navOpen = false;
navBtn.addEventListener("click", function () {
    if (navOpen) {
        navBtn.classList.remove("nav_btn--open")
        navMenu.classList.remove("nav_menu--open")

        navOpen = false
    } else {
        navBtn.classList.add("nav_btn--open")
        navMenu.classList.add("nav_menu--open")
        navOpen = true
    }
})