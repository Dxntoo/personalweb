var menulinks = document.getElementById("navbar__items");
var dropdown = document.getElementById("dropdown__menu");

function myFunction(x) {
  if (x.matches) {
    menulinks.style.display = "none";
  } else {
    menulinks.style.display = "inherit";
  }
}

var x = window.matchMedia("(max-width: 800px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

function hamburgerMenu() {
  if (dropdown.style.display == "none") {
    dropdown.style.display = "flex";
  } else {
    dropdown.style.display = "none";
  }
}

function myFunction2(y) {
  if (y.matches) {
    dropdown.style.display = "none";
  }
}

var y = window.matchMedia("(min-width: 800px)");
myFunction2(y); // Call listener function at run time
y.addListener(myFunction2); // Attach listener function on state changes
