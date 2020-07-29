/** @format */
////////////////////////////////////////////////////////////////////////////////
// app.js initializes and executes all other classes in the project
////////////////////////////////////////////////////////////////////////////////
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Init weather, ui, storage object and UI elements
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Storage.getLocationData();
const weather = new Weather(Storage.city, Storage.country),
  ui = new UI(),
  changeLocationModal_EL = document.querySelector('#change-loc-btn'),
  city_EL = document.querySelector('#modal-city'),
  countryCode_EL = document.querySelector('#modal-country');

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// app.js Event Listeners
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Load weather on DOM on initial page load
document.addEventListener('DOMContentLoaded', getWeather);

// Change weather
changeLocationModal_EL.addEventListener('click', () => {
  weather.changeLocation(city_EL.value, countryCode_EL.value);
  getWeather();
  city_EL.value = '';
  countryCode_EL.value = '';
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// app.js Functions
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Loads weather on DOM
function getWeather() {
  weather
    .getWeatherData()
    .then((weatherData) => {
      ui.paint(weatherData);
    })
    .catch((err) => console.log(err));
}
