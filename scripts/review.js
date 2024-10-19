
let reviewCount = Number(localStorage.getItem('reviews'));
localStorage.setItem('reviews', reviewCount + 1);


const numberReviews = localStorage.getItem('reviews');
showCounts = document.getElementById('reviewCount');
showCounts.textContent = numberReviews;
