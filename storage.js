/** @format */
////////////////////////////////////////////////////////////////////////////////
// Storage.js is a class which saves the last city and country searched and loads it on the DOM
////////////////////////////////////////////////////////////////////////////////
class Storage {
  constructor() {
    this.city;
    this.country;
    this.defaultCity = 'London';
    this.defaulCountry = 'GB';
  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // Storage Class functions
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // Sets new weather location on browser storage
  setLocationData(city, country) {
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);
  }
  // Retrieves the weather location from storage
  getLocationData() {
    if (localStorage.getItem('city') === null) {
      console.log(this.defaultCity);
      this.city = this.defaultCity;
      //console.log(this.city)
    } else {
      this.city = localStorage.getItem('city');
    }
    if (localStorage.getItem('country') === null) {
      this.country = this.defaulCountry;
    } else {
      this.country = localStorage.getItem('country');
    }
  }
}
