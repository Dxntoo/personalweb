const hamburger = document.getElementsByClassName('hamburger');
const navUL = document.getElementsById('.nav_ul');

hamburger.addEventListener('click', () =>{
    navUL.classList.toggle('show');
});