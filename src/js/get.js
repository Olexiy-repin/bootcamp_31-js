'use strict';

/*
 * Method (GET).
 */

const BASE_URL = 'http://localhost:3000';

const getUsers = () => {
  return fetch(`${BASE_URL}/users`, {
    method: 'GET',
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

getUsers()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
