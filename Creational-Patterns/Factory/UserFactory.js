const Manager = require('./Manager');
const SalesPerson = require('./SalesPerson');

class UserFactory {
  createUser(type, name, age, salary) {
    if (type === 'manager') {
      return new Manager(name, age, salary);
    }
    return new SalesPerson(name, age, salary);
  }
}
module.exports = UserFactory;
