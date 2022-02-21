'use strict';
/*
 * Наследование с extends и super
 */

class User {
  constructor({ firstName, lastName, age } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Manager extends User {
  constructor({ numberOfSales, ...otherProps } = {}) {
    super(otherProps);
    this.numberOfSales = numberOfSales;
  }

  doManagerWork() {
    console.log('Я занимаюсь продажами');
  }
}

class Developer extends User {
  constructor({ completedProjects, ...otherProps } = {}) {
    super(otherProps);
    this.completedProjects = completedProjects;
  }

  doDeveloperWork() {
    console.log('Я пишу код');
  }
}
