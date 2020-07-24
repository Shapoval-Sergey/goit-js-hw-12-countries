import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import updateCountriesMarkup from './js/update-countries-markup';
import refs from './js/refs';
import './js/notifications';
import './styles.css';

const debounceInputHandler = debounce(event => {
  const inputValue = event.target.value;
  refs.list.innerHTML = '';
  fetchCountries(inputValue).then(updateCountriesMarkup);
}, 500);

refs.input.addEventListener('input', debounceInputHandler);
