'use strict';
/*
 * Деструктуризация объектов
 */

const user = {
  firstName: 'John',
  lastName: 'Reese',
  age: 30,
};

/*
? Напишите деструктурирующее присваивание, которое:
? свойство firstName присвоит в переменную firstName.
? свойство age присвоит в переменную userAge.
? свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
*/

const { firstName, age: userAge, isAdmin = false } = user;

console.log('firstName: ', firstName);
console.log('userAge: ', userAge);
console.log('isAdmin: ', isAdmin);

/*
 * Глубокая деструктуризация объектов
 */

// const team = {
//   number: 4,
//   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: 'en',
//   },
// };

// const { number, flag, employees, langs } = team;
// const { original: originalLang, secondary: secondaryLang } = langs;

// const {
//   number,
//   flag,
//   employees,
//   langs: { original: originalLang, secondary: secondaryLang },
// } = team;

// console.log('number: ', number);
// console.log('flag: ', flag);
// console.log('employees: ', employees);
// console.log('originalLang: ', originalLang);
// console.log('secondaryLang: ', secondaryLang);

/*
 * Деструктуризация массивов
 */

// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];
// const [user1, , user2] = names;

// const rgb = [0, 255, 34];
// const [red, green, blue] = rgb;

// console.log('red: ', red);
// console.log('green: ', green);
// console.log('blue: ', blue);

/*
? У нас есть объект salaries с зарплатами:
? Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
?
? Если объект salaries пустой, то нужно вернуть null.
? Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
? P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// [
//   ['John', 100],
//   ['Pete', 300],
//   ['Mary', 250]
// ]

// const topSalary = function (salaries) {
//   const salariesArr = Object.entries(salaries);
//   let max = 0;
//   let employeeName = '';

//   for (const salary of salariesArr) {
//     const [name, value] = salary;

//     if (value > max) {
//       max = value;
//       employeeName = name;
//     }
//   }

//   return {
//     name: employeeName,
//     salary: max,
//   };
// };

// console.log(topSalary(salaries));
