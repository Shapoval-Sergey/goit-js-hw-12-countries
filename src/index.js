import './styles.css';
import fetchCountries from './js/fetchCountries';
import updateCountriesMarkup from './js/update-countries-markup';

const refs = {
  input: document.querySelector('#js-input'),
  list: document.querySelector('.list-countries'),
};

refs.input.addEventListener('input', handlerInputText);

function handlerInputText(event) {
  const inputValue = event.target.value;
  refs.list.innerHTML = '';
  fetchCountries(inputValue).then(updateCountriesMarkup);
}
