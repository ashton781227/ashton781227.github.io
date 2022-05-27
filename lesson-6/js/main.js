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


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
          // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        const town_options = [6,2,0];
        for (let j = 0; j < town_options.length; j++ ) {
            let i = town_options[j];
            
            let card = document.createElement('div');
            
            let h2 = document.createElement('h2');
            h2.textContent = towns[i].name;
            card.appendChild(h2);
            let p1 = document.createElement('p');
            p1.textContent = towns[i].motto;
            card.appendChild(p1);
            
            let p2 = document.createElement('h3');
            p2.textContent = 'Year founded: ' + towns[i].yearFounded;
            card.appendChild(p2);
            let p3 = document.createElement('h3');
            p3.textContent = 'Population: ' + towns[i].currentPopulation;
            card.appendChild(p3);
            let p4 = document.createElement('h3');
            p4.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            card.appendChild(p4);
            let image = document.createElement('img');
            image.setAttribute('src', '/weather/images/'+ towns[i].photo);
            image.setAttribute('alt', towns[i].name  );
            card.appendChild(image);
            
            document.querySelector('div.cards').appendChild(card);
        };
        
      });