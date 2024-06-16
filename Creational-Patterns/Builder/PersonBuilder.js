const Person = require('./Person');

class PersonBuilder {
  constructor(name) {
    this.name = name;
  }
  setAge(age) {
    this.age = age;
    return this;
  }
  makeManager() {
    this.isManager = true;
    return this;
  }
  makeEmployee() {
    this.isEmployee = true;
    return this;
  }
  build() {
    return new Person(this);
  }
}
module.exports = PersonBuilder;
