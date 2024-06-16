const shopPrototype = require('./shop_prototype');
const john = shopPrototype.clone();
john.name = 'John';
john.addProduct({ name: 'Xaomi', price: 4000 });
console.log(john.getProducts());

const alex = shopPrototype.clone();
alex.name = 'Alex';
alex.addProduct({ name: 'Galaxy', price: 5000 });
console.log(alex.getProducts());