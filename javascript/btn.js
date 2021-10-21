const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");


const menu1 = document.querySelector("#menu1");
const menu2 = document.querySelector("#menu2");
const menu3 = document.querySelector("#menu3");
const menu4 = document.querySelector("#menu4");
const menu5 = document.querySelector("#menu5");
const menu6 = document.querySelector("#menu6");


btn1.addEventListener("click",function(){
    menu1.style.display = "flex";
    menu2.style.display = "flex";
    menu3.style.display = "flex";
    menu4.style.display = "flex";
    menu5.style.display = "flex";
    menu6.style.display = "flex";
});
btn2.addEventListener("click",function(){
    menu1.style.display = "flex";
    menu2.style.display = "none";
    menu3.style.display = "flex";
    menu4.style.display = "flex";
    menu5.style.display = "none";
    menu6.style.display = "flex";
    // menu2.style.display = "none";
    // menu5.style.display = "none";
});
btn3.addEventListener("click",function(){
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "flex";
    menu5.style.display = "flex";
    menu6.style.display = "none";
    // menu1.style.display = "none";
    // menu2.style.display = "none";
    // menu3.style.display = "none";
    // menu6.style.display = "none";
});
btn4.addEventListener("click",function(){
    menu1.style.display = "none";
    menu2.style.display = "flex";
    menu3.style.display = "none";
    menu4.style.display = "flex";
    menu5.style.display = "none";
    menu6.style.display = "none";
    // menu1.style.display = "none";
    // menu3.style.display = "none";
    // menu5.style.display = "none";
    // menu6.style.display = "none";
});
btn5.addEventListener("click",function(){
    menu1.style.display = "flex";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
    menu5.style.display = "flex";
    menu6.style.display = "none";
    // menu2.style.display = "none";
    // menu3.style.display = "none";
    // menu4.style.display = "none";
    // menu6.style.display = "none";
});
btn6.addEventListener("click",function(){
    menu1.style.display = "flex";
    menu2.style.display = "flex";
    menu3.style.display = "none";
    menu4.style.display = "flex";
    menu5.style.display = "none";
    menu6.style.display = "none";
    // menu3.style.display = "none";
    // menu5.style.display = "none";
    // menu6.style.display = "none";
});
