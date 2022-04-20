const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();
let lastUpdate = document.lastModified;
document.querySelector('#last_update').textContent = lastUpdate;