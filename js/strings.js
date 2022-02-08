'use strict';
/*
 * Конкатенация строк, шаблонные строки
 */

/*
  ? Запросите у пользователя имя с возрастом и выведете в консоль сообщение:
  ? Hello имя_пользователя, your age is возраст_пользователя .
*/

// const username = prompt('Your name?');
// const age = prompt('Your age?');
// const message = 'Hello' + ' ' + username + ',' + ' ' + 'your age is' + ' ' + age + '.';

// console.log(message);

//? Выполните задачу выше, используя шаблонные строки
// const username = prompt('Your name?');
// const age = prompt('Your age?');
// const message = `Hello ${username}, your age is ${age}`;

// console.log(message);

/*
 * Свойства и Методы строк
 */

//? Запросите у пользователя имя и узнайте из скольких символов, состоит имя.
// const username = prompt('Your name?');

// console.log(username.length);
//? Попросите пользователя ввести email и переведите в нижний регистр.
// let userEmail = prompt('Your email?');
// userEmail = userEmail.toLowerCase();

// console.log(userEmail);

//? Попросите пользователя ввести email и переведите в верхний регистр
// let userEmail = prompt('Your email?');
// userEmail = userEmail.toUpperCase();

// console.log(userEmail);

/*
  ? Есть строка 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Узнайте есть ли в этой строке язык: 'JavaScript', или 'JS'?.
  ? Если есть, узнайте позицию на которой находиться данная подстрока
*/

// let languagesStr = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.toLowerCase();
// const subStr = 'js';
// const isInclude = languagesStr.includes(subStr.toLowerCase());
// const indexOfSubStr = languagesStr.indexOf(subStr);

// console.log(indexOfSubStr);

//? У нас есть строка '24px', узнайте на что заканчивается данная строка, на %, rem, em или px;
// const str = '24px';
// const subStr = 'px';

// console.log(str.endsWith(subStr));

//? У нас есть строка '23,4', замените запятую на точку
// let str = '23,4';
// str = str.replace(',', '.');
// str = Number.parseFloat(str);

// console.log(str);

/*
  ? У нас есть строка:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замените все вхожденя dog на monkey.
*/
// let str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// str = str.replaceAll('dog', 'monkey');

// console.log(str);

//? У нас есть дата в формате '12:05:21', замените (:) на (.)
// let someDate = '12:05:21';
// someDate = someDate.replaceAll(':', '.');

// console.log(someDate);

/*
  ? Данна строка 'Vasyl Pupkin is 24 years old'.
  ? Скопируйте с этой строки отдельно имя с фамилией и отдельно возраст.
*/
// const someStr = 'Vasyl Pupkin is 24 years old';
// const subStr = '24';

// const indexOfUsername = someStr.indexOf(subStr);
// const username = someStr.slice(indexOfUsername, indexOfUsername + subStr.length);

// console.log(username);
