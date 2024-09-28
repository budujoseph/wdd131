
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;

const hamburger = document.querySelector('nav');
const list = document.querySelector('ul');

hamburger.addEventListener('click' ,() => {
    list.classList.toggle('show');
    hamburger.classList.toggle('show');
})

