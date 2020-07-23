// import handlerInputText from '../index';

// const refs = {
//   input: document.querySelector('#js-input'),
//   list: document.querySelector('.list-countries'),
// };

// let name = '';

// function handlerInputText(event) {
//   name = event.target.value;
// }

// refs.input.addEventListener('input', handlerInputText);

// export default {
//   name: '',
//   fetchArticles() {
//     const url = `https://restcountries.eu/rest/v2/name/eesti`;
//     const options = {
//       headers: {
//         Accept: 'application/json',
//       },
//     };

//     return fetch(url, options)
//       .then(res => res.json())
//       .then(data => console.log(data));
//   },
//   //   resetPage() {
//   //     this.page = 1;
//   //   },
//   //   incrementPage() {
//   //     this.page += 1;
//   //   },
//   get query() {
//     return this.name;
//   },
//   set query(value) {
//     this.name = value;
//   },
// };

fetch('https://restcountries.eu/rest/v2/name/eesti')
  .then(res => res.json())
  .then(data => console.log(data));
