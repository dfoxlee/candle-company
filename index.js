let navMenu = document.getElementById("navMenu");
let closeBtn = document. getElementById("closeBtn");
let menuBtn = document. getElementById("menuBtn");
let navMenuItems = document.getElementsByClassName("nav-menu-item");

function toggleMenu() {
    if(navMenu.style.height == false || navMenu.style.height == "0px") {
        if(screen.width < 600) {
            navMenu.style.height = "100vh";
        }else {
            navMenu.style.height = "80px";
        }
    }else {
        navMenu.style.height = "0px";
    }
}

for(let i=0; i<navMenuItems.length; i++) {
    navMenuItems[i].addEventListener("click", toggleMenu);
}

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);