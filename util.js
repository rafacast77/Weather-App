/** @format */

class Util {
  tempFtoC(fahrenheit) {
    return (((fahrenheit - 32) * 5) / 9).toFixed(0);
  }

  tempCtoF(celsius) {
    return ((celsius * 9) / 5 + 32).toFixed(0);
  }

  windDirection(degree) {
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

  getDewPointCelsius(temp, hum) {
    const tem2 = 6.6,
      r = 42,
      tem = -1.0 * tem2,
      es = 6.112 * Math.exp((-1.0 * 17.67 * tem) / (243.5 - tem)),
      ed = (r / 100.0) * es,
      eln = Math.log(ed / 6.112),
      td = (-243.5 * eln) / (eln - 17.67);
    return td.toFixed(0);
  }
}
