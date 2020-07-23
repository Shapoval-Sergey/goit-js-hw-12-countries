import countries from '../templates/gallery-country.hbs';

const refs = {
  list: document.querySelector('.list-countries'),
};

function updateCountriesMarkup(data) {
  const markup = countries(data);
  refs.list.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;
