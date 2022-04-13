'use strict';

/*
 * Method(PUT/PATCH). Headers ("Content-Type": "application/json"). Body.
 */

const BASE_URL = 'http://localhost:3000';

const updateUserById = (userId, infoForUpdate) => {
  return fetch(`${BASE_URL}/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(infoForUpdate),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

updateUserById(15, { name: 'Oleksii Repin', email: 'test@gmail.com' })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
