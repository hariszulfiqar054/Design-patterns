const MobileShop = require('./MobileShop');

const shopPrototype = new MobileShop();
shopPrototype.addProduct({ name: 'iPhone', price: 1000 });
shopPrototype.addProduct({ name: 'iPad', price: 2000 });
shopPrototype.addProduct({ name: 'MacBook', price: 3000 });

module.exports = shopPrototype;
