/** @format */

class Weather {
  constructor(city, contryCode) {
    this.APIkey = 'ab74b9f1a02aaef1fc9464aae99bc924';
    this.city = city;
    this.contryCode = contryCode;
  }

  async getWeatherData() {
    let cityCode = '';
    const cityListResponse = await fetch('./util.json');
    const cityListData = await cityListResponse.json();
    for (let cityObj of cityListData) {
      if (cityObj.name === this.city && cityObj.country === this.contryCode) {
        cityCode = cityObj.id;
      }
    }
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityCode}&units=imperial&appid=${this.APIkey}`
    );
    const responseData = await response.json();
    return responseData;
  }
  changeLocation(city, countryCode) {
    this.city = city;
    this.contryCode = countryCode;
  }
}
