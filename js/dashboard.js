var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
var activecont = document.querySelector(".active-cont");
var nav_link = document.querySelector("a.nav-link");

var navLinks = [].slice.call(document.getElementsByClassName("nav-link"));
let nav_link_active = navLinks.filter(nl => nl.classList.contains("nav-link-active"))[0];

let btnBuscar = document.getElementById("btnBuscar");

const toggleSearch = () => {
    document.getElementById("search-form").classList.toggle("bg-gray");
    document.getElementById("search-form").classList.toggle("bg-gray");
    document.querySelector("#search-form").classList.toggle("bg-white");
    document.querySelector("#search-form").classList.toggle("bg-gray");
    document.querySelector("#search-form input").classList.toggle("bg-gray");
    document.querySelector("#search-form input").classList.toggle("d-none");
    document.querySelector("#search-form button").classList.toggle("bg-gray");
    document.querySelector("#search-form button").classList.toggle("bg-white");
}
toggleSearch();

btnBuscar.addEventListener("click", toggleSearch);

menu_btn.addEventListener("click", () => {

    nav_link_active.classList.toggle("nav-link-close");

    nav_link.classList.toggle("d-none");

    for (let i = 1; i <= 6; i++) {
        var togglex = document.querySelector(".toggle" + i);
        if (togglex.classList.contains("d-none")) {
            togglex.classList.remove("d-none")
            sidebar.style.width = "auto";
            activecont.style.marginLeft = "174px";
        } else {
            togglex.classList.add("d-none")
            sidebar.style.width = "54px";
            activecont.style.marginLeft = "54px";

        }

    }

});

let navegador = navigator.userAgent;
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    menu_btn.addEventListener('click', e => console.log("mobile"));
    menu_btn.dispatchEvent(new Event('click'));
} 
