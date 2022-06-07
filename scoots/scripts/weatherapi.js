

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=8f5d9b1cbaed68f59cc467dd13ff7fb8&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    document.getElementById('current-temp').textContent = jsObject.main.humidity;
    document.getElementById('humidity').textContent = jsObject.main.temp;

    const desc = jsObject.weather[0].description;  // note how we reference the weather array

    document.getElementById('weather-description').textContent = desc;  // informational specification only



  });

const forcastURL = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=8f5d9b1cbaed68f59cc467dd13ff7fb8&units=imperial";
fetch(forcastURL)
  .then((response) => response.json())
  .then((jsObject) => {
   
    
    const forecastList = jsObject.list.filter(item => item.dt_txt.includes('12:00:00'));
    
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