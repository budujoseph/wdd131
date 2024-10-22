

const hamburger = document.querySelector('nav');
const list = document.querySelector('ul');

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a');


hamburger.addEventListener('click' ,() => {
    list.classList.toggle('show');
    hamburger.classList.toggle('show');
})

navLinks.forEach(link => {
    if(link.href.includes(activePage)){
        link.classList.add('active');

    }
})