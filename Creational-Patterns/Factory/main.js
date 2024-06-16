const UserFactory = require('./userFactory');

const userFactory = new UserFactory();

const manager = userFactory.createUser('manager', 'John', 30, 1000);
const salesPerson = userFactory.createUser('salesPerson', 'Jane', 25, 2000);

console.log(JSON.stringify(manager));
console.log(JSON.stringify(salesPerson));
