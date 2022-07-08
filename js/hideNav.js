/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
const navBar = document.querySelector(".navbar");
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || window.scrollTop) {
        navBar.style.opacity = `1`;
    } else {
        navBar.style.opacity = `0`;
    }
    prevScrollpos = currentScrollPos;
}