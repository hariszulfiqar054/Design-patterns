const PersonBuilder = require('./PersonBuilder');

const johnManager = new PersonBuilder('John').setAge(30).makeManager().build();
console.log(johnManager.toString());

const alexEmployee = new PersonBuilder('Alex')
  .setAge(25)
  .makeEmployee()
  .build();
console.log(alexEmployee.toString());
