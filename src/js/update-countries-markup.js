import countries from '../templates/gallery-country.hbs';
import refs from './refs';

function updateCountriesMarkup(data) {
  const markup = countries(data);
  refs.list.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;
