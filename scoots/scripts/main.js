const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');
const addbanner = document.querySelector('.addbanner');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();
let lastUpdate = document.lastModified;
document.querySelector('#last_update').textContent = lastUpdate;


let todaysDate = new Date();
let weekday = todaysDate.getDay();

if (weekday == 6 ) {
    addbanner.style.display = "block";
}



function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

