let navMenu = document.getElementById("navMenu");
let closeBtn = document. getElementById("closeBtn");
let menuBtn = document. getElementById("menuBtn");
let navMenuItems = document.getElementsByClassName("nav-menu-item");
let promotionCard1 = document.getElementById("promotionCard1");
let promotionCard2 = document.getElementById("promotionCard2");
let promotionCard3 = document.getElementById("promotionCard3");
let promotionCard4 = document.getElementById("promotionCard4");
let promotionCard5 = document.getElementById("promotionCard5");
let promotionCard6 = document.getElementById("promotionCard6");
let promotionCard7 = document.getElementById("promotionCard7");
let leftPromotionArrow = document.getElementById("leftPromotionArrow");
let rightPromotionArrow = document.getElementById("rightPromotionArrow");
let index = 1;

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

function togglePromotionLeft() {
    switch(index) {
        case 1:
            return;
        case 2:
            promotionCard1.style.display = "flex";
            promotionCard2.style.display = "none";
            index = 1;
            break;
        case 3:
            promotionCard2.style.display = "flex";
            promotionCard3.style.display = "none";
            index = 2;
            break;
        case 4:
            promotionCard3.style.display = "flex";
            promotionCard4.style.display = "none";
            index = 3;
            break;
        case 5:
            promotionCard4.style.display = "flex";
            promotionCard5.style.display = "none";
            index = 4;
            break;
        case 6:
            promotionCard5.style.display = "flex";
            promotionCard6.style.display = "none";
            index = 5;
            break;
        case 7:
            promotionCard6.style.display = "flex";
            promotionCard7.style.display = "none";
            index = 6;
            break;
    }
}

function togglePromotionRight() {
    switch(index) {
        case 1:
            promotionCard2.style.display = "flex";
            promotionCard1.style.display = "none";
            index = 2;
            break;
        case 2:
            promotionCard3.style.display = "flex";
            promotionCard2.style.display = "none";
            index = 3;
            break;
        case 3:
            promotionCard4.style.display = "flex";
            promotionCard3.style.display = "none";
            index = 4;
            break;
        case 4:
            promotionCard5.style.display = "flex";
            promotionCard4.style.display = "none";
            index = 5;
            break;
        case 5:
            promotionCard6.style.display = "flex";
            promotionCard5.style.display = "none";
            index = 6;
            break;
        case 6:
            promotionCard7.style.display = "flex";
            promotionCard6.style.display = "none";
            index = 7;
            break;
        case 7:
            return;
    }
}

leftPromotionArrow.addEventListener("click", togglePromotionLeft);
rightPromotionArrow.addEventListener("click", togglePromotionRight);
menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

