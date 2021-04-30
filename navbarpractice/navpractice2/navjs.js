
function displayMenuHB(){
    var menulinks = document.getElementById("navbar__items");
    if(menulinks.style.display == "block"){
        menulinks.style.display == "none";
    }else{
        menulinks.style.display == "block";
    }
}



window.addEventListener("scroll",function(){
let main = document.getElementsByClassName("body__container");

main.classList.toggle("scrolling-active");
});

