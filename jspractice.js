const hamburger = document.getElementsByClassName('hambtn');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () =>{
    navUL.classList.toggle('show');
})