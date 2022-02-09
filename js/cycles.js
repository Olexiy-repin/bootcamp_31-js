'use strict';
/*
 * Циклы (while, do while, for)
 */

/*
 * While
 */

// while (condition) {
// код, тело цикла (statement)
// }

// let iterator = 0;

// 0 < 5 = true
// 1 < 5 = true
// 2 < 5 = true
// 3 < 5 = true
// 4 < 5 = true
// 5 < 5 = false

// while (iterator < 5) {
//   console.log('Hello!');

//   iterator = iterator + 1;
// }

/*
? Выведите числа от 1 до 50
*/

// let num = 1;

// while (num <= 50) {
//   console.log(num);

//   num += 1;
// }

/*
? Найдите сумму чисел от 1 до 100
 */

// let number = 1;
// let result = 0;

// while (number <= 100) {
//   // result = result + number;
//   result += number;
//   number += 1;
// }

// console.log(result);

/*
? Дано число n=1000.
? Делите его на 2 столько раз, пока результат деления не станет меньше 50.
? Какое число получится?
? Посчитайте количество итераций, необходимых для этого, и запишите его в переменную num.
*/

// let n = 1000;
// let counter = 0;

// while (n / 2 > 50) {
//   counter += 1;
//   // n = n / 2
//   n /= 2;
// }

// console.log(counter);
// console.log(n);

/*
 * Do While
 */
// do {
// statement
// } while (condition);

/*
? Напишите цикл, который предлагает prompt ввести число, большее 100.
? Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
? Цикл должен спрашивать число пока посетитель не введёт число, большее 100.
? Предполагается, что посетитель вводит только числа;
*/

// let number = null;

// do {
//   number = Number(prompt('Введите число больше 100'));
// } while (number < 100);

/*
 * For
 */
// for (инициализация; условие; пост-выражение) {
// тело цикла
// }

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

/*
? При помощи цикла for выведите чётные числа от 2 до 10.
*/

// for (let i = 2; i <= 10; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

// for (let i = 0; i < 10; i += 1) {
//   if (i === 3) {
//     console.log('Мы нашли 3');
//     break;
//   }

//   console.log(i);
// }

/*
? Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.
? Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’,
? а для чисел, делящихся на 5 – ‘Buzz’.
? Для чисел которые кратны 3 и 5 = 'FizzBuzz'
*/

// 1 Решение
// for (let i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// 2 Решение
// for (let i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//     continue;
//   }

//   if (i % 3 === 0) {
//     console.log('Fizz');
//     continue;
//   }

//   if (i % 5 === 0) {
//     console.log('Buzz');
//     continue;
//   }

//   console.log(i);
// }

// 3 Решение
// for (let i = 1; i <= 100; i += 1) {
//   let str = '';

//   if (i % 3 === 0) {
//     str += 'Fizz';
//   }

//   if (i % 5 === 0) {
//     str += 'Buzz';
//   }

//   console.log(str || i);
// }

/*
 ? Выведите методом console.log() звездочки от 1 до 7 штук в виде  треугольника таким образом:
 ? *
 ? **
 ? ***
 ? ****
 ? *****
 ? ******
 ? *******
 */

// let star = '*';

// for (let i = 0; i < 7; i += 1) {
//   console.log(star);
//   star += '*';
// }

// for (let i = 100; i >= 0; i -= 1) {
//   console.log(i);
// }

// const number = 20; // 20

// if (true) {
//   const number = 10; // 10

//   console.log(number); // 10
// }

// console.log(number); // 20

// for (let i = 100; i >= 0; i -= 1) {
//   console.log(i);
// }

// for (let i = 0; i <= 100; i += 1) {
//   console.log(i);
// }
