/** @format */
//Init weather, ui object
const weather = new Weather('London', 'GB'),
  ui = new UI(),
  changeLocation_EL = document.querySelector('#change-loc-btn');

//Load weather on DOM
document.addEventListener('DOMContentLoaded', getWeather);
changeLocation_EL.addEventListener('click', () => {
  const city = document.querySelector('#modal-city'),
    countryCode = document.querySelector('#modal-country');
  weather.changeLocation(city.value, countryCode.value);
  getWeather();
  city.value = '';
  countryCode.value = '';
  $('#change-location').modal('hide');
});

function getWeather() {
  weather
    .getWeatherData()
    .then((weatherData) => {
      ui.paint(weatherData);
    })
    .catch((err) => console.log(err));
}
