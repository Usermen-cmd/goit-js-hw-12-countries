const axios = require('axios');

export default class FetchData {
  constructor() {
    axios.defaults.baseURL = 'https://restcountries.eu/rest/v2/name/';
  }
  fetchResponse(name) {
    return axios
      .get(`${name}?fields=name;capital;population;languages;flag`)
      .then(res => {
        return this.getData(res);
      });
  }
  getData(object) {
    return object.data;
  }
}
