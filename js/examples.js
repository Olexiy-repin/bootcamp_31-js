'use strict';
/*
? Напишите метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает
? и возвращает общую стоимость камней с таким именем, ценой и количеством из свойства stones.
*/

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const currentStone = this.stones.find(el => el.name === stoneName);

//     return currentStone.price * currentStone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

/*
? Выполните рефакторинг методов объекта phonebook чтобы код заработал.
*/

// const phonebook = {
//   contacts: [],

//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };

//     this.contacts.push(newContact);
//   },

//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },

//   getContacts() {
//     return this.contacts;
//   },
// };

// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// });

// phonebook.add({
//   name: 'Poly',
//   email: 'poly@hotmail.com',
// });

// console.log(phonebook.getContacts());

/*
? Создайте объект calculator с тремя методами:
?
? read(a, b)- принимает два значения и сохраняет их как свойства объекта.
? add() - возвращает сумму сохранённых значений.
? mult() - перемножает сохранённые значения и возвращает результат.
*/

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(10, 20);

// console.log(calculator.add());
// console.log(calculator.mult());
