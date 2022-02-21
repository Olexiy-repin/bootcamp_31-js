'use strict';
/*
 * Цепочки прототипов.
 * Object.create().
 * obj.hasOwnProperty()
 */

// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

//* Собственные свойства объекта и не собственные свойства

// const user = {
//   firstName: 'Isaac',
//   age: 40,
// };

// const user2 = Object.create(user);
// user2.firstName = 'Louis';
// user2.lastName = 'Miller';

// const user3 = Object.create(user2);
// user3.firstName = 'Jordan';

// console.log('user: ', user);
// console.log('user2: ', user2);
// console.log('user3: ', user3);

//* Провервка собественных свойства obj.hasOwnProperty()
// console.log(user3.hasOwnProperty('age'));

//* Цикл for...in, перебирает все свойства, и собственные и не собственные.
// for (const prop in user3) {
//   if (user3.hasOwnProperty(prop)) {
//     console.log(prop);
//     console.log(user3[prop]);
//   }
// }

// const numbers = [1, 2, 3];

// console.log(numbers);

// const num = 10.25;

// new String(str);

// new Number(num);

// console.dir(Number);

// console.log(num.toFixed(1));
