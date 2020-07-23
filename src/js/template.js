import country from '../templates/gallery-country.hbs';
// import dish from '../menu.json';
// import '../styles.css';

const menuRef = document.querySelector('.list-countries');

const markup = country(dish);
menuRef.insertAdjacentHTML('beforeend', markup);
