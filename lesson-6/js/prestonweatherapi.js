

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=8f5d9b1cbaed68f59cc467dd13ff7fb8&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.humidity;
    document.getElementById('humidity').textContent = jsObject.main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    const wind = jsObject.wind.speed;  
    document.getElementById('weather-description').textContent = desc;  // informational specification only
    document.getElementById('windspeed').textContent = wind;
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only

  });

const forcastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=8f5d9b1cbaed68f59cc467dd13ff7fb8&units=imperial";
fetch(forcastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    const forecastList = jsObject.list.filter(item => item.dt_txt.includes('18:00:00'));
    console.log(forecastList);
    for (let j = 0; j < forecastList.length; j++ ) {
            let card = document.createElement('div');
            card.classList.add('flex-col');
            let day = forecastList[j].dt_txt;
            let weekday = new Date(day).toLocaleString('en-us', {weekday:'long'});
            
            
            let span1 = document.createElement('span');
            span1.textContent = weekday;
            span1.classList.add('col-head');
            card.appendChild(span1);
            let image = document.createElement('img');
            image.setAttribute('src', 'https://openweathermap.org/img/w/' + forecastList[j].weather[0].icon + '.png');
            image.setAttribute('alt', forecastList[j].weather[0].description  );
            image.classList.add('forecastimg');
            card.appendChild(image);
            let span2 = document.createElement('span');
            span2.textContent = forecastList[j].main.temp + '°F';
            span2.classList.add('data');
            card.appendChild(span2);
            
            
            document.getElementById('forecast').appendChild(card);
    }

    
    

  });


const townURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
          // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        const town = towns[6];

        let article = document.createElement('article');
            
        let h2 = document.createElement('h2');
        h2.textContent = "Upcoming Events:";
        article.appendChild(h2);
        let p1 = document.createElement('p');
        p1.textContent = town.events[0];
        article.appendChild(p1);
        let p2 = document.createElement('p');
        p2.textContent = town.events[1];
        article.appendChild(p2);
        let p3 = document.createElement('p');
        p3.textContent = town.events[2];
        article.appendChild(p3);
        let p4 = document.createElement('p');
        p4.textContent = town.events[3];
        article.appendChild(p4);
        document.querySelector('div.events').appendChild(article);

        
        
      });