import temp from '../templates/country.hbs';
import namesTemp from '../templates/names.hbs';
import * as PNotify from '@pnotify/core/dist/PNotify.js';

const optionsNotification = {
  type: 'error',
  title: 'Введите название страны',
  text: 'Сделайте ваш запрос более точным или введите корректное название страны',
  delay: 2000,
  remove: true,
};

export default class RenderData {
  constructor() {
    this.countryRef = document.querySelector('.country');
  }
  render(array) {
    if (array.length === 1) {
      this.renderCounry(array[0]);
      return;
    }
    if (array.length > 1 && array.length < 10) {
      this.renderCountrylist(array);
      return;
    }
    this.clearData();
    this.toError();
  }
  renderCounry(data) {
    this.clearData();
    const markUp = temp(data);
    this.countryRef.insertAdjacentHTML('afterbegin', markUp);
  }
  renderCountrylist(arrayNames) {
    this.clearData();
    const markUp = namesTemp(arrayNames);
    this.countryRef.insertAdjacentHTML('afterbegin', markUp);
  }
  clearData() {
    this.countryRef.innerHTML = '';
  }
  toError() {
    return PNotify.error(optionsNotification);
  }
}
