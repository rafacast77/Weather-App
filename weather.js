/** @format */
////////////////////////////////////////////////////////////////////////////////
// Weather.js is a class which receives the weather location from app.js. It looks for this location on the "OpenWeather" city list and retrieves a citycode used in the OpenWeather API call which returns the current weather of that location.
////////////////////////////////////////////////////////////////////////////////
class Weather {
  constructor(city, contryCode) {
    this.APIkey = 'ab74b9f1a02aaef1fc9464aae99bc924';
    this.city = city;
    this.contryCode = contryCode;
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // Weather Class functions
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // Returns current weather from current location
  async getWeatherData() {
    let cityCode = '';
    const cityListResponse = await fetch('./cityList.json');
    const cityListData = await cityListResponse.json();
    for (let cityObj of cityListData) {
      if (
        cityObj.name.toLowerCase() === this.city.toLowerCase() &&
        cityObj.country === this.contryCode.toUpperCase()
      ) {
        cityCode = cityObj.id;
      }
    }
    if (cityCode !== '') {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${cityCode}&units=imperial&appid=${this.APIkey}`
      );
      const responseData = await response.json();
      Storage.setLocationData(this.city, this.contryCode);
      return responseData;
    } else {
      Util.alertMessage('City or Country Code are incorrect');
    }
  }

  // Changes current weather location
  changeLocation(city, countryCode) {
    this.city = city;
    this.contryCode = countryCode;
  }
}
