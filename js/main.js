'use strict';
/*
 *  Массивы: литерал массива, элементы, индексация, длина
 */

/*
? Создайте массив genres с элементами «Jazz» и «Blues».
? Добавьте «Рок-н-ролл» в конец.
? Выведите в консоль первый элемент массива.
? Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
? Удалите первый элемент и выведите его в консоль.
? Вставьте «Country» и «Reggy» в начало массива.
 */

// const genres = ['Jazz', 'Blues'];

// genres.push('Rock&Roll'); // ['Jazz', 'Blues', 'Rock&Roll']
// console.log(genres[0]); // 'Jazz'
// console.log(genres[genres.length - 1]); // 'Rock&Roll'
// console.log(genres.shift()); // 'Jazz'
// genres.unshift('Country', 'Reggy'); // ['Country', 'Reggy' ,'Blues', 'Rock&Roll']

// console.log(genres); // ['Country', 'Reggy' ,'Blues', 'Rock&Roll']

/*
 * Передача по ссылке и по значению
 */

/*
? Создайте переменную a = 10.
? Создайте и присвойте переменной b -> переменную a
? Вывидите в консоль обе этих переменных
? Измените значение переменной a и ещё раз выведете в консоль
*/

// let a = 10;
// const b = a;

// console.log('a: ', a); // 10
// console.log('b: ', b); // 10

// a = 20;

// console.log('a: ', a); // 20
// console.log('b: ', b); // 10

/*
? Создайте массив arr1 = [1, 2, 3].
? Создайте и присвойте массиву arr2 -> массив arr1
? Вывидите в консоль оба эти массива
? Добавьте элемент в массив arr1 и ещё раз выведете оба массива в консоль
*/

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log('arr1: ', arr1); // [1, 2, 3]
// console.log('arr2: ', arr2); // [1, 2, 3]

// arr1.push(10);

// console.log('arr1: ', arr1); // [1, 2, 3, 10]
// console.log('arr2: ', arr2); // [1, 2, 3, 10]

/*
 * Перебор массива циклами for и for...of
 */

/*
? Напиши скрипт для перебора массива fruits циклом for.
? Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента.
? Нумерация элементов должна начинаться с 1.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// for (const fruit of fruits) {
//   console.log(fruit);
// }

/*
? Напиши скрипт поиска самого маленького числа в массиве.
? Код должен работать для любого массива чисел.
? Используй цикл для решения задачи.
*/

// const numbers = [2, 17, 94, 1, -20, -1, 23, 37];
// let min = numbers[0];

// 1 Вариант решения
// for (let i = 1; i < numbers.length; i += 1) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// 2 Вариант решения
// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }

// console.log(min);

/*
? У нас есть массив с зарплатами сотрудников, нужно посчитать общую сумму зарплат
*/

// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// 1 Вариант решения
// for (let i = 0; i < salaries.length; i += 1) {
//   total += salaries[i];
// }

// 2 Вариант решения
// for (const salary of salaries) {
//   total += salary;
// }

// console.log(total);

/*
? У нас есть несколько массивов с зарплатами сотрудников из разных отделов, нужно посчитать общую сумму зарплат
*/

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// let total = 0;

// 1 Вариант решения
// for (const managerSalary of managerSalaries) {
//   total += managerSalary;
// }

// for (const developerSalary of developersSalaries) {
//   total += developerSalary;
// }

// console.log(total);

// 2 Вариант решения
// const salaries = [];

// for (const managerSalary of managerSalaries) {
//   salaries.push(managerSalary);
// }

// for (const developerSalary of developersSalaries) {
//   salaries.push(developerSalary);
// }

// for (const salary of salaries) {
//   total += salary;
// }

// console.log(total);

// 3 Вариант решения
// const allSalaries = [].concat(managerSalaries, developersSalaries);

// for (const salary of allSalaries) {
//   total += salary;
// }

// console.log(total);

/*
 * Базовые методы: split и join, indexOf и includes, push, slice и splice, concat
 */

/*
? Напиши скрипт для вычисления площади прямоугольника со сторонами,
? значения которых хранятся в переменной values в виде строки.
? Значения гарантированно разделены пробелом.
*/

// const values = '8 11';
// const sidesArr = values.split(' ');
// const area = Number(sidesArr[0]) * Number(sidesArr[1]);

// console.log(area);

/*
? Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
? В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми.
? Порядковый номер имен и телефонов в строках указывают на соответствие.
? Количество имен и телефонов гарантированно одинаковое.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const namesArr = names.split(',');
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

/*
? Напиши скрипт который «разворачивает» строку (обратный порядок букв)
? и выводит ее в консоль.
*/

// 1 Вариант решения
// const string = 'Welcome to the future';
// const charsArr = string.split('');
// const reverseCharsArr = [];

// for (let i = charsArr.length - 1; i >= 0; i -= 1) {
//   reverseCharsArr.push(charsArr[i]);
// }

// console.log(reverseCharsArr.join(''));

// 2 Вариант решения
// const string = 'Welcome to the future';
// let reverseStr = '';

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   reverseStr += string[i];
// }

// console.log(reverseStr);

/*
? У нас есть массив сотрудников, отсортируйте его, что бы сотрудники не повторялись
*/

// const employees = ['Dennis', 'Shaw', 'Watkins', 'Ray', 'Shaw', 'Watkins'];
// const filteredEmployees = [];

// // 0 === 0
// // 1 === 1
// // 2 === 2
// // 3 === 3
// // 1 === 4
// // 3 === 5

// for (let i = 0; i < employees.length; i += 1) {
//   if (employees.indexOf(employees[i]) === i) {
//     filteredEmployees.push(employees[i]);
//   }
// }

// console.log(filteredEmployees);

// //? Сотрудник Shaw уволился, удалите его из массива
// const indexOfRemovedElement = filteredEmployees.indexOf('Shaw');
// filteredEmployees.splice(indexOfRemovedElement, 1);

// console.log(filteredEmployees);

// //? Добавьте нового сотрудника Thornton, перед Watkins;
// const indexOfWatkins = filteredEmployees.indexOf('Watkins');
// filteredEmployees.splice(indexOfWatkins, 0, 'Thornton');

// console.log(filteredEmployees);

// slug
// const title = 'Title 1'.split(' ').join('-'); // Title-1
// console.log(title);
