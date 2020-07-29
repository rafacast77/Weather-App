/** @format */
////////////////////////////////////////////////////////////////////////////////
// Util.js is a class which contains useful classes which support this application
////////////////////////////////////////////////////////////////////////////////
class Util {
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // Util Class functions
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // Converts temperature from fahrenheit to celsius
  static tempFtoC(fahrenheit) {
    return (((fahrenheit - 32) * 5) / 9).toFixed(0);
  }

  // Converts temperature from celsius to fahrenheit
  static tempCtoF(celsius) {
    return ((celsius * 9) / 5 + 32).toFixed(0);
  }

  // Returns a text of weather direction given a the direction in degrees
  static windDirection(degree) {
    if (degree > 337.5) return 'North';
    if (degree > 292.5) return 'NW';
    if (degree > 247.5) return 'West';
    if (degree > 202.5) return 'SW';
    if (degree > 157.5) return 'South';
    if (degree > 122.5) return 'SE';
    if (degree > 67.5) return 'East';
    if (degree > 22.5) {
      return 'NE';
    }
    return 'North';
  }

  // Return the DewPoint in celsius
  static getDewPointCelsius(temp, hum) {
    const tem2 = 6.6,
      r = 42,
      tem = -1.0 * tem2,
      es = 6.112 * Math.exp((-1.0 * 17.67 * tem) / (243.5 - tem)),
      ed = (r / 100.0) * es,
      eln = Math.log(ed / 6.112),
      td = (-243.5 * eln) / (eln - 17.67);
    return td.toFixed(0);
  }

  // alert message for incorrect city or country code
  static alertMessage(message) {
    const alert_EL = document.createElement('div');
    alert_EL.className = 'alert alert-warning';
    alert_EL.appendChild(document.createTextNode(message));
    document
      .querySelector('.main-card')
      .insertBefore(alert_EL, document.querySelector('#w-location'));

    //Dismisses the alert after 3 seconds and disable the button for 3 seconds
    setTimeout(function () {
      $(alert_EL).alert('close');
      calculateBtn_EL.removeAttribute('disabled');
    }, 3000);
  }
}
