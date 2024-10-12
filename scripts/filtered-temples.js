
const currentYear = new Date().getFullYear();
// document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;

const hamburger = document.querySelector('nav');
const list = document.querySelector('ul');

hamburger.addEventListener('click', () => {
  list.classList.toggle('show');
  hamburger.classList.toggle('show');
})



const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
    templeName: 'Accra Ghana',
    location: 'Accra, Ghana',
    dedicated: '2004, January, 11',
    area: '17500',
    imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/800x500/accra-ghana-temple-758797-wallpaper.jpg',
  },

  {
    templeName: 'Copenhagen Denmark ',
    location: 'Frederiksberg, Denmark',
    dedicated: '2004, May, 23',
    area: '25000',
    imageUrl: 'https://www.churchofjesuschrist.org/imgs/ecc2bf9dceebbd11e1f9ac07b060aed8c1970125/full/320%2C/0/default',
  },

  {
    templeName: 'Helsinki Finland',
    location: 'Espoo, Uusimaa, Finland',
    dedicated: '2006, October, 2',
    area: '16350',
    imageUrl: 'https://churchofjesuschristtemples.org/assets/img/temples/helsinki-finland-temple/helsinki-finland-temple-22169-main.jpg',
  }
  // Add more temple objects here...
];

const homeLink = document.getElementById('home');
const oldLink = document.getElementById('old');
const newLink = document.getElementById('new');
const largeLink = document.getElementById('large');
const smallLink = document.getElementById('small');
const header = document.querySelector('h2');

function createTempleCard(filteredTemples) {
  document.querySelector('.temples-grid').innerHTML = '';
  filteredTemples.forEach(temple => {
    let card = document.createElement('section');
    card.classList.add('temp');
    let name = document.createElement('h3');
    let location = document.createElement('p');
    let dedication = document.createElement('p');
    let area = document.createElement('p');
    let img = document.createElement('img');

    name.textContent = temple.templeName;
    location.innerHTML = `<p>Location: <span>${temple.location}</span></p> `;
    dedication.innerHTML = `<p>Dedicated: <span>${temple.dedicated}</span></p> `;
    area.innerHTML = `<p> Area: <span>${temple.area}<span>sq ft</p>`;
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', `${temple.templeName} Temple`);
    img.setAttribute('loading', "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector('.temples-grid').appendChild(card);
  });
}

  document.addEventListener('DOMContentLoaded', createTempleCard(temples));



    oldLink.addEventListener('click', () => {
      createTempleCard(temples.filter(temple => {
        const year = new Date(temple.dedicated.split(',')[0]).getFullYear();
        return year < 1900;
      }));

      header.textContent = "Old Temples";
    });

    newLink.addEventListener('click', () => {
      createTempleCard(temples.filter(temple => {
        const year = new Date(temple.dedicated.split(',')[0]).getFullYear();
        return year > 2000;
      }));

      header.textContent = " New Temples";
    });

    largeLink.addEventListener('click', () => {
      createTempleCard(temples.filter(temple => temple.area > 90000));

      header.textContent = "Large Temples";
    });

    smallLink.addEventListener('click', () => {
      createTempleCard(temples.filter(temple => temple.area < 10000));

      header.textContent = 'Small Temples';
    });


    homeLink.addEventListener('click', ()=> {
      header.textContent = "Home";
      createTempleCard(temples);
      });

      document.addEventListener('DOMContentLoaded', createTempleCard(temples));



  

   
