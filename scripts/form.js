const currentYear = new Date().getFullYear();
// document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;




const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const productName = document.getElementById('productname')
  
products.forEach(product  => {
    let options = document.createElement('option');
    options.name = product.name;
    options.value = product.id;
    options.textContent = product.name;
    productName.appendChild(options);
});

const reviewPage = window.location.pathname;

function loadReviewCount(){
  let reviewCount = localStorage.getItem('reviewCount');
  if(reviewCount === null){
    reviewCount = 0;
  }
    
}

function reviewIncreament() {
  let reviewCount = localStorage.getItem('reviewCount');
  if(reviewCount === null){
    reviewCount = 0;
  }
    reviewCount = parseInt(reviewCount) +1;
    localStorage.setItem('reviewCount', reviewCount);
}

window.onload = function(){
  if(reviewPage.includes('review.html')){
    reviewIncreament();
  loadReviewCount();
  }
};