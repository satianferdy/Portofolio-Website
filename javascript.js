// var tombolMenu = document.getElementsByClassName('menu-toggle')[0];
// var menu = document.getElementsByClassName('menu')[0];

// tombolMenu.onclick = function() {
//     menu.classList.toggle('active');
// }

// menu.onclick = function() {
//     menu.classList.toggle('active');
// }
const humberger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

humberger.addEventListener("click", () => {
    humberger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    humberger.classList.remove("active");
    navMenu.classList.remove("active");
}))