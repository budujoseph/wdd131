

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
        price: "Gh₵ 50.00",
        imageUrl:
         "https://images.pexels.com/photos/552056/pexels-photo-552056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        foodName: "",
        price: "",
        imageUrl:
            ""
    },
    {
        foodName: "",
        price: "",
        imageUrl:
            ""
    },
    {
        foodName: "",
        price: "",
        imageUrl:
          ""
    },
    {
        foodName: "",
        price: "",
        imageUrl:
          ""
    },
    {
        foodName: "",
        price: "",
        imageUrl:
          ""
    },
    {
        foodName: "",
        price: "",
        imageUrl:
          ""
    },
  
    {
        foodName: "",
        price: "",
        imageUrl:
          ""
    },

    {
        foodName: "",
        price: "",
        imageUrl:
          ""
    },
    
  ];