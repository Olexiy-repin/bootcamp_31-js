'use strict';

/*
 * Математические операторы (+, -, *, /, %, **)
 */
// const num = 20;
// const num2 = 3;

// const result = num % num2;

// console.log(result);

/*
 ? Данно два числа 10 и 20.
 ? Проведите над этими числами математические операции (+ - / *).
*/

//? Проверьте четные ли числа 15, 20, 45, 30.
// const isEven = 30 % 2;

// console.log(isEven);

/*
  ? Данно 90 минут, узнайте сколько в данном числе содержиться часов и минут.
  ? Результат выведите в консоль.
*/
// const totalMinutes = 140;
// let hours = totalMinutes / 60;
// hours = Math.floor(hours);
// const minutes = totalMinutes % 60;

// console.log(String(hours).padStart(2, 0), ':', String(minutes).padStart(2, 0));

/*
 * Number.parseInt() Number.parseFloat()
 */
// const num = Number(prompt('Введите первое число'));
// const num2 = Number(prompt('Введите второе число'));

// const result = num + num2;

// console.log(result);

// let number = '102.5km';
// number = Number.parseFloat(number);

// console.log(number);

/* 
  ? Попросите пользователя ввести число.
  ? Выведите результат в консоль.
  ? Приведите строку к числу.
*/

//? Данна строка '24px', достаньте с этой строки целое число.
// const str = Number.parseInt('24px');

// console.log(str);

//? Данна строка '25.5%', достаньте с этой строки дробное число.
// const str = Number.parseFloat('25.5%');

// console.log(str);

//? Попробуйте привести к числу, данную строку 'abc'.
// const str = Number('abc');

// console.log(str);

//? Запросите у пользователя ввести два числа, сложите их и выведите результат в консоль.

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */

/*
  ? Данно число 23.5, примените к нему различный методы округления.
  ? Протестируйте на числах, 23.3, 23.9
*/
// const number = 23.3;
// const result = Math.round(number);

// console.log(result);

/*
  ? Попросите пользователя ввести число и степень.
  ? Возведите число в степень и выведете результат в консоль.
*/

// const number = Number(prompt('Ваше число'));
// const pow = Number(prompt('Введите степень'));

// const result = Math.pow(number, pow);

// console.log(result);

/*
  ? Сгенирируйте рандомное число:
  ? от 0 до 1;
  ? от 10 до 50.
*/
// Math.floor(min + Math.random() * (max + 1 - min));
// const randomNumber = Math.random();

// console.log(randomNumber);
//? Сгенирируйте рандомное число. Минимальное и максимально значение, получить от пользователя
// const min = 0;
// const max = 10;

// const randomNumber = Math.floor(min + Math.random() * (max + 1 - min));

// console.log(randomNumber);
