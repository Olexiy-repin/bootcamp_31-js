'use strict';
/*
 * Колбэки, функции высшего порядка
 */

// const foo1 = function (callback) {
//   // let callback = foo2;
//   callback();
// };

// const foo2 = function () {
//   console.log(`Hello!`);
// };

// foo1(foo2);

//? Запрос на сервер
// const fetchUser = async function (userUrl, callback) {
//   const response = await fetch(`https://api.github.com/users/${userUrl}`);
//   const result = await response.json();

//   callback(result);
// };

// const showInfoAboutUser = function (user) {
//   console.log(user);
// };

// fetchUser('olexiy-repin', showInfoAboutUser);

//? Регестрация событий на странице
// const userEmail = document.querySelector('.user-email');

// const logValues = function () {
//   // console.log(e.target.value);
//   console.log('Hi!');
// };

// userEmail.addEventListener('input', logValues);

/*
? Напишите функцию each(array, callback), которая первым параметром ожидает массив, а вторым - функцию, которая применится к каждому элементу массива.
? Функция each должна вернуть новый массив, элементами которого будут результаты вызова коллбека.
*/

// const each = function (array, callback) {
//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// };

// const multi = function (el) {
//   return el * 2;
// };

// const add = function (el) {
//   return el + 2;
// };

// const logElements = function (el) {
//   console.log(el);
// };

// const numbers = [1, 2, 3, 4, 5];

// console.log(each(numbers, multi));
// console.log(each(numbers, add));
// each(numbers, logElements);

/*
? Напишите следующие функции:
? createProduct(product, callback) - принимает объект товара без id, а также колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id и вызывает колбек передавая ему созданный обьект.
? logProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль
? logTotalPrice(product) - коллбек принимающий обьект продукта и логирующий общую стоимость товара в консоль
*/

// const createProduct = function (product, callback) {
//   const newProduct = {
//     id: Date.now(),
//     ...product,
//   };

//   callback(newProduct);
// };

// const logProduct = function (product) {
//   console.log(product);
// };

// const logTotalPrice = function ({ price, quantity } = {}) {
//   console.log(`Total price: ${price * quantity}`);
// };

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logTotalPrice);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/*
? Добавьте объекту account методы withdraw(amount, onSuccess, onError) и deposit(amount, onSuccess, onError), где первый параметр это сумма операции, а второй и третий - колбеки.
?
? Метод withdraw вызывает:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`) если amount больше TRANSACTION_LIMIT
? onError(`Amount can't exceed account balance of ${this.balance} credits`) если amount больше this.balance
? иначе снимаем деньги с баланса и вызываем onSuccess(`Account balance: ${this.balance}`)
?
? Метод deposit вызывает:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`) если amount больше TRANSACTION_LIMIT
? onError(`Amount must be more than 0 credits`) если amount меньше либо равен нулю
? иначе прибавляем к балансу amount и вызываем onSuccess(`Account balance: ${this.balance}`)
*/

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },

//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// const handleSuccess = function (message) {
//   console.log(`✅ Success! ${message}`);
// };

// const handleError = function (message) {
//   console.log(`❌ Error! ${message}`);
// };

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);

// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
