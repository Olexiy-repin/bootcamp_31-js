'use strict';

/*
 * async/await
 * асинхронная(async) функция ВСЕГДА возвращает промис.
 * await заставляет функцию ждать выполнения промиса.
 * await нельзя использовать вне асинхронных функций.
 * try/catch для отлова ошибок
 */

// const BASE_URL = 'https://jsonplaceholder.typicode.com';

// const fetchPosts = async () => {
//   try {
//     const postsResponse = await fetch(`${BASE_URL}/posts`);

//     if (!postsResponse.ok) {
//       throw new Error(response.status);
//     }

//     const postsData = await postsResponse.json();

//     return postsData;
//   } catch (err) {
//     console.log(err);
//   }
// };

// const logPosts = async () => {
//   const result = await fetchPosts();
//   console.log(result);
// };

// logPosts();

//? TASK 01
// Перепеши на async/await
// const loadPosts = async url => {
//   const postsResponse = await fetch(url);

//   if (!postsResponse.ok) {
//     throw new Error(postsResponse.status);
//   }

//   const posts = await postsResponse.json();

//   return posts;
// };

// loadPosts('https://jsonplaceholder.typicode.com/posts')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 02
// Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?
// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   wait()
//     .then(data => {
//       console.log(data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   // ...что здесь написать?
//   // чтобы вызвать wait() и дождаться результата "10" от async–функции
//   // не забывайте, здесь нельзя использовать "await"
// }

// f();
