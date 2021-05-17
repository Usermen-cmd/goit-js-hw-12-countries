import './styles.css';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import FetchData from './APIServise/fetchData.js';
import RenderData from './APIServise/renderData';
var debounce = require('lodash.debounce');

const fetchCountries = new FetchData();
const renderCountries = new RenderData();

const inputRef = document.querySelector('input');

inputRef.addEventListener('input', debounce(onInputHandler, 500));

function onInputHandler(e) {
  const name = e.target.value;
  fetchCountries
    .fetchResponse(name)
    .then(renderCountries.render.bind(renderCountries))
    .catch(err => {
      console.log(`Йой, ошибка ${err.response.status}, повторите ваш запрос`);
      renderCountries.toError();
    });
}
