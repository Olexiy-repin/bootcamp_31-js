'use strict';

// import heroesDb from './heroes.json';

// import { add, sub } from './math.js';
// import calculator from './math.js';

// console.log(calculator.add(2, 5));

// const user = {
//   firstname: 'Steven',
//   lastname: 'Vaughn',
//   age: 20,
//   gender: 'male',

//   showName() {
//     console.log(this.firstname);
//   },
// };

// const userJson = JSON.stringify(user);

// console.log('user: ', user);
// console.log('userJson: ', userJson);

// try {
//   const data = JSON.parse('Well, this is awkward');
// } catch (err) {
//   console.log(err);
// }

// console.log('Hello');

const user = {
  firstname: 'Milton',
  lastname: 'Shelton',
  age: 40,
};

localStorage.setItem('userOleksii', JSON.stringify(user));

console.log(JSON.parse(localStorage.getItem('userOleksii')));
