'use strict';
/*
 *  Метод map()
 */

// массив.map((element, index, array) => {
//  Тело коллбек-функции
// });

//? Умножьте все числа на 2
// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.map((el, idx, arr) => {
//   return el * 2;
// });

// console.log('numbers: ', numbers);
// console.log('result: ', result);

/*
? Перепишите цикл через map
? Код ниже получает из массива строк новый массив, содержащий их длины:
*/

// const wordsArr = ['Есть', 'жизнь', 'на', 'Марсе'];

// const getElementsLength = function (arrOfStr) {
//   const strLengthesArr = arrOfStr.map(el => el.length);

//   return strLengthesArr;
// };

// console.log(getElementsLength(wordsArr)); // [4, 5, 2, 5]

/*

? Создание массива значений Фаренгейта из массива значений Цельсия
? Для перевод из Цельсий в Фаренгейты нужна формула. F = C * 1.8 + 32
*/
// const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];
// const farenheits = celsius.map(el => el * 1.8 + 32);

// console.log('celsius: ', celsius);
// console.log('farenheits: ', farenheits);

/*
? Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.
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

// const getModels = cars => {
//   return cars.map(el => el.model);
// };

// console.log(getModels(cars));

/*
? Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным значением свойства price
? в зависимости от переданной скидки.
*/

// const makeCarsWithDiscount = (cars, discount) => {
//   const carsWidthDiscount = cars.map((el, idx, arr) => {
//     el.price = Number((el.price - el.price * discount).toFixed(2));

//     return el;
//   });

//   return carsWidthDiscount;
// };

// console.table(cars);
// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));
