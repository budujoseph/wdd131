

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


const menuItems = [
    {
        foodName: "BBQ Bacon Cheeseburger",
        foodPrice: "GH₵50.00",
        imageUrl:
         "https://images.pexels.com/photos/552056/pexels-photo-552056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        foodName: "The Magic Plate",
        foodPrice: "GH₵60.00",
        imageUrl:
            "https://cdn.pixabay.com/photo/2022/02/08/03/48/rice-7000691_1280.jpg"
    },
    {
        foodName: "Breeze Rice",
        foodPrice: "GH₵20.00",
        imageUrl:
            "https://images.pexels.com/photos/3926124/pexels-photo-3926124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        foodName: "Hot Dog",
        foodPrice: "GH₵45.65",
        imageUrl:
          "https://images.pexels.com/photos/3023479/pexels-photo-3023479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        foodName: "Mighty Meat Feast",
        foodPrice: "GH₵80.25",
        imageUrl:
          "https://images.pexels.com/photos/845812/pexels-photo-845812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        foodName: "Ultimate Cheesy Crust",
        foodPrice: "GH₵70.00 ",
        imageUrl:
          "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ];

  

function createMenuSect(foodMenu) {
    foodMenu.forEach(menu => {
        let sect = document.createElement('section');
        sect.classList.add('mymenu');
        let img = document.createElement('img');
        let name = document.createElement('h3');
        let price = document.createElement('p');

        img.setAttribute('src', menu.imageUrl);
        img.setAttribute('alt' ,`${menu.foodName}`);
        img.setAttribute('loading', "lazy");
        img.setAttribute('width', '200px');
        name.textContent = menu.foodName;
        price.innerHTML = `<p><em>Price: </em><span>${menu.foodPrice}</span></p>`;

        sect.appendChild(img);
        sect.appendChild(name);
        sect.appendChild(price);

        document.getElementById('menuItems').appendChild(sect);

        
    });
}

document.addEventListener('DOMContentLoaded', createMenuSect(menuItems));