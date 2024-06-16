class Manager {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

module.exports = Manager;