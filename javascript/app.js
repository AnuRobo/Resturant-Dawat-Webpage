// const parallax = document.querySelector("#parallax");

// window.addEventListener("scroll",function(){
//     let offset = window.pageYOffset;
//     console.log(offset);
//     parallax.style.backgroundPositionY = offset* 0.7 + "px";
// })




const header = document.querySelector(".headerclass");
const headerSec2 = document.querySelector(".headerSection2");
const nav_logo_img = document.querySelector(".nav_logo_img");
const nav_list = document.querySelector(".nav_list");
const nav_link = document.querySelectorAll(".nav_link");

//Header section 2
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    console.log(offset);
    if(offset>=98){
        header.style.position = "fixed";
        header.style.width = "100%"
        header.style.backgroundColor = "white";
        // header.style.paddingTop = "1em";
        header.classList.add("headerzigZag");
        // headerSec2.classList.add("headerzigZag");
        headerSec2.style.position = "fixed";
        headerSec2.style.backgroundColor = "white";
        // headerSec2.style.paddingBottom = ".2em";
        headerSec2.style.margin = 0;
        headerSec2.style.zIndex = 1000;
        // headerSec2.style.zIndex = "100";
        nav_logo_img.src = "./images/main_logo_black.png"
        nav_list.style.color = "black";
        // const nav_link = document.querySelectorAll(".nav_link");
        // nav_link.style.color = "black";
        nav_link.forEach(element => {
            element.style.color = "black"
        })
    }else{  
        header.style.backgroundColor = "initial";
        header.classList.remove("headerzigZag");
        headerSec2.style.position = "initial";
        headerSec2.style.backgroundColor = "initial";
        nav_logo_img.src = "./images/main_logo.png"
        nav_list.style.color = "white";
        nav_link.forEach(element => {
            element.style.color = "white";
        })
    }
})
nav_link.addEventListener("mouseover",() => {
    nav_link.forEach(element => {
        element.style.color = "red";
    })
})



// Menu section Scripting

