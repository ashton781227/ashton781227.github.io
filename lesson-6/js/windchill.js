
window.addEventListener('load', function () {
    const temperature = parseFloat(document.querySelector("#current-temp").textContent);
    const windSpeed = parseFloat(document.querySelector("#windspeed").textContent);
    

    function culculateWindChill (temperature, windSpeed) {
        return Math.round(35.74 + 0.6215 * temperature - 35.75 * (windSpeed ** 0.16) + 0.4275 * temperature * (windSpeed ** 0.16))
    };
    
    if (temperature <= 50 && windSpeed >= 3) {
        document.querySelector("#windchill").textContent = `${culculateWindChill(temperature, windSpeed)} °F`;
        
    } 
    else {
        document.querySelector("#windchill").textContent = "N/A";
    }
});