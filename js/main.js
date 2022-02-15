'use strict';

/*
 * Операция spread как замена concat и slice
 */

//*  Копия массива
// const numbers = [1, 2, 3, 4, 5];

// const numbers2 = [...numbers];

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);

// numbers2[0] = 10;

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);

//* Объединение массивов
// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = [10, 9, 8, 7];
// const allNumbers = [...numbers, ...numbers2];

// console.log(allNumbers);

//* Распыления массива в функцию
// const numbers = [1, 2, 3, 4, 5];

// console.log(Math.max(...numbers));

/*
 * Операция spread как замена Object.assign({}, ...sources)
 */

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };

// const user2 = { ...user };

// console.log('user: ', user);
// console.log('user2: ', user2);

// user2.firstName = 'Birdie';

// console.log('user: ', user);
// console.log('user2: ', user2);

//* Распыления сложных типов

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };

// const user2 = _.cloneDeep(user);

// console.log('user: ', user);
// console.log('user2: ', user2);

// user2.someArr.push(10);

// console.log('user: ', user);
// console.log('user2: ', user2);

/*
 * Операция rest
 */

//? Напишите функцию sum, которая сумирует произвольное количество аргументов
// const sum = function (num, ...args) {
//   let total = 0;

//   for (const number of args) {
//     total += number;
//   }

//   return total;
// };

// const numbers = [1, 2, 3, 4];

// console.log(sum(...numbers));
// console.log(sum(10, 20, 30));
