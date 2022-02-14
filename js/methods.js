'use strict';

/*
 * Методы объекта и this при обращении к свойствам в методах
 */

/*
 * - changeTitle(newTitle) - изменяет название фильма
 * - addActor(newActor) - добавляет актёра
 * - updateRating(newRating) - обновляет рейтинг фильма
 * - isAdult - проверяет возрастное ограничение на фильм
 */

const filmDuna = {
  title: 'Duna',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?',
  rating: 10,
  actors: [
    'Rosetta Pena',
    'Clayton Crawford',
    'Larry Norton',
    'Georgia Garrett',
    'Jackson Ballard',
  ],
  adult: false,

  changeTitle(newTitle) {
    this.title = newTitle;
  },

  addActor(newActor) {
    this.actors.push(newActor);
  },

  updateRating(newRating) {
    this.rating = newRating;
  },

  isAdult() {
    return this.adult;
  },
};

filmDuna.changeTitle('Matrix');
filmDuna.addActor('Eddie');
filmDuna.updateRating(8);
console.log(filmDuna.isAdult());

console.log(filmDuna);
