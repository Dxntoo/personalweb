   

var menulinks = document.getElementById("navbar__items");
var hambtn = document.getElementsByClassName("hamburger__btn")

// function myFunction(x) {
//     if (x.matches) {
//       menulinks.style.display = "none";
//     }else{
//         menulinks.style.display = "block";
//     }
//   }
  
//   var x = window.matchMedia("(max-width: 800px)");
//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction) // Attach listener function on state changes


function openMenu() {
    document.getElementById("dropdown__menu").style.display = "flex";
}

function closeMenu(){
    document.getElementById("dropdown__menu").style.display = "none";
}