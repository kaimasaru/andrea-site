const homeBtn = document.querySelector("#home-btn");
const collectBtn = document.querySelector("#collect-btn");
const aboutBtn = document.querySelector("#about-btn");
const shopBtn = document.querySelector("#shop-btn");
const socialBtn = document.querySelector("#social-btn");

const homePg = document.querySelector("#home-pg");
const collectPg = document.querySelector("#collect-pg");
const aboutPg = document.querySelector("#under-construction");
const shopPg = document.querySelector("#under-construction");
const socialPg = document.querySelector("#under-construction");

let pageArr = [homePg, collectPg, aboutPg, shopPg, socialPg];
let btnArr = [homeBtn, collectBtn, aboutBtn, shopBtn, socialBtn];

let previousPage = 0;
let activePage = 0;

let transitionTime = 250;

pageArr[0].classList.add("show");

homeBtn.classList.add("active");

// btnArr.forEach(function(button) {
//     button.addEventListener("click", function(){
//         btnArr.forEach(function(temp) {
//             console.log(temp);
//             temp.classList.remove("active");
//         });
//         for(let i = 0; i < pageArr.length; i++) {
//             pageArr[i].classList.add("hidden");
//         }        
//         button.classList.add("active");
//     });
// })

for(let i = 0; i < btnArr.length; i++) {
    btnArr[i].addEventListener("click", function() {
        selectPage(i, activePage);
        previousPage = activePage;
        activePage = i;
    });
}

function selectPage(newPage, oldPage) {
    // newPage = index of the page/button that was clicked
    // oldPage == which page/button we need to hide / make active
    // need to log previous page.

    // oldPage button -> remove active
    // newPage button -> add active

    btnArr[oldPage].classList.remove("active");
    btnArr[newPage].classList.add("active");

    // oldPage -> remove show and add hidden after transitionTime
    // newPage -> after transitionTime remove hidden and add show

    pageArr[oldPage].classList.remove("show");
    console.log("begin transition");
    setTimeout(function() {
        console.log("swapping now");
        pageArr[oldPage].classList.add("hidden");
        pageArr[newPage].classList.remove("hidden");
        pageArr[newPage].classList.add("show");
    }, transitionTime);
}