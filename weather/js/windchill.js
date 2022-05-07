const temperature = parseInt(document.querySelector("#temperature").textContent);
const windSpeed = parseInt(document.querySelector("#windspeed").textContent);
console.log(temperature);
console.log(windSpeed);

function culculateWindChill (temperature, windSpeed) {
    return Math.round(35.74 + 0.6215 * temperature - 35.75 * (windSpeed ** 0.16) + 0.4275 * temperature * (windSpeed ** 0.16))
};
console.log(culculateWindChill(temperature, windSpeed));
if (temperature <= 50 && windSpeed >= 3) {
    document.querySelector("#windchill").textContent = `${culculateWindChill(temperature, windSpeed)} °F`;
    
} 
else {
    document.querySelector("#windchill").textContent = "N/A";
}