const API_KEY = "cfaca62cfd0359e60393774898fe89e8"

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const city = document.querySelector("#weather span:last-child");
      const weater = document.querySelector("#weather span:first-child");
      city.innerText = data.name;
      weater.innerText = `${data.weather[0].main} / ${data.main.temp}℃`
    });
}
function onGroError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGroError);
