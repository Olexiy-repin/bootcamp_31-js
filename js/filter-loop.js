'use strict';
/*
 *  Метод filter()
 */

// массив.filter((element, index, array) => {
// Тело коллбек-функции
// });

/*
? Отфильтруйте массив, что бы остались только чётные
*/

// const numbers = [1, 2, 3, 4, 5, 6];
// const filteredNumbers = numbers.filter(el => el % 2 === 0);

// console.log(filteredNumbers);

/*
? Отфильтруем массив, оставив в нем только положительные числа:
*/

// const numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

// const positiveNumbers = numbers.filter(el => el > 0);

// console.log(positiveNumbers);

/*
? Отфильтруйте массив heroes по свойству объекта franchise.
*/

// const heroes = [
//   { name: 'Batman', franchise: 'DC' },
//   { name: 'Ironman', franchise: 'Marvel' },
//   { name: 'Thor', franchise: 'Marvel' },
//   { name: 'Superman', franchise: 'DC' },
// ];

// const filteredByFranchise = (heroesArr, franchise) => {
//   return heroesArr.filter(el => el.franchise === franchise);
// };

// console.log(filteredByFranchise(heroes, 'Marvel'));

/*
? Пусть функция filterByPrice возвращает массив автомобилей цена которых
? меньше чем значение параметра threshold.
*/

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// const filterByPrice = (cars, threshold) => {
//   // без деструктуризации
//   // return cars.filter(el => el.price < threshold);

//   // с деструктуризацией
//   // return cars.filter(({ price }, idx, arr) => price < threshold);
// };

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

/*
? Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.
*/

// const getCarsWithDiscount = cars => {
//   return cars.filter((el, idx, arr) => el.onSale);
// };

// console.table(getCarsWithDiscount(cars));

/*
? Пусть функция getCarsWithType возвращает массив автомобилей тип которых
? совпадает со значением параметра type.
*/

// const getCarsWithType = (cars, type) => {
//   return cars.filter((el, idx, arr) => el.type === type);
// };

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
// console.table(getCarsWithType(cars, 'truck'));

// ? Оставить только уникальные числа
// const numbers = [1, 2, 3, 3, 2, 1, 4, 5, 6, 4];

// 1 итерация
// el = 1; idx = 0;
// 0 === 0

// 2 итерация
// el = 2; idx = 1;
// 1 === 1

// 3 итерация
// el = 3; idx = 2;
// 2 === 2

// 4 итерация
// el = 3; idx = 3;
// 2 === 3

// 5 итерация
// el = 2; idx = 4;
// 1 === 4

// const filteredNumbers = numbers.filter((el, idx, arr) => {
//   return arr.indexOf(el) === idx;
// });

// console.log(filteredNumbers);
