/** @format */
////////////////////////////////////////////////////////////////////////////////
// app.js initializes and executes all other classes in the project
////////////////////////////////////////////////////////////////////////////////
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Init weather, ui, storage object and UI elements
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const storage = new Storage();
storage.getLocationData();
const weather = new Weather(storage.city, storage.country),
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
  storage.setLocationData(city_EL.value, countryCode_EL.value);
  weather.changeLocation(city_EL.value, countryCode_EL.value);
  getWeather();
  city.value = '';
  countryCode.value = '';
  $('#change-location').modal('hide');
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
