const navBar = document.querySelector("#navbar");
const menuBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sideBar = document.querySelector("#sidebar");

// add fixed class to navbar
window.addEventListener("scroll", function () {
    if (this.window.pageYOffset > 80) {
        navBar.classList.add("navbar-fixed");
    } else {
        navBar.classList.remove("navbar-fixed");
    }
});

//sidebar show or hide


menuBtn.addEventListener("click", function () {
    sideBar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", function () {
    sideBar.classList.remove("show-sidebar");
});