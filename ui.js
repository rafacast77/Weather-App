/** @format */
////////////////////////////////////////////////////////////////////////////////
// UI.js is a class which loads the new weather values into the DOM
////////////////////////////////////////////////////////////////////////////////
class UI {
  constructor() {
    this.wLocation = document.querySelector('#w-location');
    this.wDescription = document.querySelector('#w-description');
    this.wTemp = document.querySelector('#w-temp');
    this.wIcon = document.querySelector('#w-icon');
    this.wHumidity = document.querySelector('#w-humidity');
    this.wdewpoint = document.querySelector('#w-dewpoint');
    this.wFeelLike = document.querySelector('#w-feel_like');
    this.wWind = document.querySelector('#w-wind');
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Weather Class functions
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  // Loads new weather values into the DOM
  paint(weatherData) {
    const tempF = weatherData.main.temp.toFixed(0),
      tempC = Util.tempFtoC(tempF),
      humidity = weatherData.main.humidity,
      dewPointC = Util.getDewPointCelsius(tempC, humidity),
      dewPointF = Util.tempCtoF(dewPointC),
      feelLF = weatherData.main.feels_like.toFixed(0),
      feelLC = Util.tempFtoC(feelLF),
      windDirection = Util.windDirection(weatherData.wind.deg);

    this.wLocation.textContent =
      weatherData.name + ', ' + weatherData.sys.country;
    this.wDescription.textContent = weatherData.weather[0].description;

    this.wTemp.textContent = tempF + ' F (' + tempC + ' C)';
    this.wIcon.setAttribute(
      'src',
      `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    );
    
    this.wHumidity.textContent = 'Relative Humidity: ' + humidity + '%';
    this.wdewpoint.textContent =
      'Dewpoint: ' + dewPointF + ' F (' + dewPointC + ' C)';
    this.wFeelLike.textContent =
      'Feels Like: ' + feelLF + ' F (' + feelLC + ' C)';
    this.wWind.textContent =
      'Wind: From the ' +
      windDirection +
      ' at ' +
      weatherData.wind.speed +
      ' MPH';
  }
}
