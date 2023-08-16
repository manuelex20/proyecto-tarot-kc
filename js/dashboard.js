var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
var activecont = document.querySelector(".active-cont");

menu_btn.addEventListener("click", () => {
    //  sidebar.classList.toggle("active-nav");
    // container.classList.toggle("active-cont");
    document.querySelector("a.nav-link").classList.toggle("d-none");


    for (let i = 1; i <= 6; i++) {
        var togglex = document.querySelector(".toggle" + i);
        if (togglex.classList.contains("d-none")) {
            togglex.classList.remove("d-none")
            sidebar.style.width = "auto";
            activecont.style.marginLeft = "175px";
        } else {
            togglex.classList.add("d-none")
            sidebar.style.width = "54px";
            activecont.style.marginLeft = "54px";

        }

    }

});
