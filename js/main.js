'use strict';
/*
 * Функциональные выражения и объявление функции.
 * Параметры, аргументы, возврат.
 */

// function имя_функции(праметр_1, параметр_2...) {
// тело функции
// }

// const showMessage = function () {
//   console.log('Hello');
// };

// showMessage();

// function showMessage() {
//   console.log('Hello');
// }

// showMessage();

// function showMessage(username) {
//   console.log(`Hello ${username}!`);
// }

// showMessage('Josie Pierce');
// showMessage('Vera Knight');
// showMessage('Alan Lamb');

// function add(a, b) {
//   const result = a + b;

//   if (result > 100) {
//     return result;
//   }

//   return 'Результат меньше 100';
// }

// const result = add(50, 60);

// console.log(result);

/*
? Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека.
? Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
? Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7,
? то есть в качестве разделителя дробной части может быть запятая.
? Индекс массы тела необходимо округлить до одной цифры после запятой;
*/

// function calcBMI(weight, height) {
//   weight = Number.parseFloat(weight.replace(',', '.'));
//   height = Number.parseFloat(height.replace(',', '.'));

//   const result = weight / height ** 2;

//   return result.toFixed(1);
// }

// const userOleksiiBmi = calcBMI('88,3', '1.75');

// console.log(userOleksiiBmi); // 28.8

/*
? Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.
*/

// function min(a, b) {
//   return a < b ? a : b;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

/*
? Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами,
? значения которых будут переданы в параметр dimensions в виде строки.
? Значения гарантированно разделены пробелом.
*/

// function getRectArea(dimensions) {
//   const sidesArr = dimensions.split(' ');

//   return Number(sidesArr[0]) * Number(sidesArr[1]);
// }

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
? Напиши функцию logItems(items), которая получает массив и использует цикл for,
? который для каждого элемента массива будет выводить в консоль сообщение
? в формате <номер элемента> - <значение элемента>. Нумерация элементов должна начинаться с 1.
? Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango,
? а для индекса 2 выведет 3 - Ajax.
*/

// function logItems(items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1}: ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя.
? В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми.
? Порядковый номер имен и телефонов в строках указывают на соответствие.
? Количество имен и телефонов гарантированно одинаковое.
*/

// function printContactsInfo(names, phones) {
//   const namesArr = names.split(',');
//   const phonesArr = phones.split(',');

//   for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//   }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// printContactsInfo('Vera,Carr,Violet,Sherman', '89001234567,89001112233,890055566377,890055566300');

/*
? Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.
*/

// function findLargestNumber(numbers) {
//   let max = numbers[0];

//   for (let i = 1; i < numbers.length; i += 1) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }

//   return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

/*
? Напишите функцию calcAverage() которая принимает произвольное кол-во аргументов и возвращает их среднее значение.
? Все аругменты будут только числами.
*/

// function calcAverage(...args) {
//   let total = 0;

//   for (const number of args) {
//     total += number;
//   }

//   return total / args.length;
// }

// console.log(calcAverage(1, 2, 3, 4)); // 2.5
// console.log(calcAverage(14, 8, 2)); // 8
// console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2

/*
? Напишите функции для работы с коллекцией обучающих курсов courses:
? addCourse(name) - добавляет курс в конец коллекции
? removeCourse(name) - удаляет курс из коллекции
? updateCourse(oldName, newName) - изменяет имя на новое
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким именем не найден'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// updateCourse('С++', 'NestJS'); // 'Курса с таким именем не найдено'

// function addCourse(name) {
//   if (courses.includes(name)) {
//     console.log('У вас уже есть такой курс');
//     return;
//   }

//   courses.push(name);
// }

// function removeCourse(name) {
//   if (!courses.includes(name)) {
//     console.log('Курс с таким именем не найден');
//     return;
//   }

//   const indexOfCourse = courses.indexOf(name);

//   courses.splice(indexOfCourse, 1);
// }

// function updateCourse(oldName, newName) {
//   if (!courses.includes(oldName)) {
//     console.log('Курс с таким именем не найден');
//     return;
//   }

//   const indexOfCourse = courses.indexOf(oldName);

//   courses.splice(indexOfCourse, 1, newName);
// }

// function showMessage() {
//   console.log('Hello');
// }

// console.log('1');
// console.log('2');
// console.log('3');
// showMessage();
