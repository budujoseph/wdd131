

const hamburger = document.querySelector('nav');
const list = document.querySelector('ul');

hamburger.addEventListener('click' ,() => {
    list.classList.toggle('show');
    hamburger.classList.toggle('show');
})