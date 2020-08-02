const homeBtn = document.querySelector("#home-btn");
const collectBtn = document.querySelector("#collect-btn");
const aboutBtn = document.querySelector("#about-btn");
const shopBtn = document.querySelector("#shop-btn");
const socialBtn = document.querySelector("#social-btn");


let pageArr = document.getElementsByClassName("content");
let btnArr = [homeBtn, collectBtn, aboutBtn, shopBtn, socialBtn];

for(let i = 0; i < pageArr.length; i++) {
    pageArr[i].classList.add("hidden");
}

pageArr[0].classList.remove("hidden");

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
        selectPage(i);
    });
}

function selectPage(num) {
    console.log("clicked");
    btnArr.forEach(function(btn) {
        btn.classList.remove("active");
    });
    for(let i = 0; i < pageArr.length; i++) {
        pageArr[i].classList.add("hidden");
    }
    console.log(pageArr[num]);
    btnArr[num].classList.add("active");
    pageArr[num].classList.remove("hidden");
}