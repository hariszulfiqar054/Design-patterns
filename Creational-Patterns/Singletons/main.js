const Shop = require('./Shop');
const Item = require('./Item');
const logger = require('./Logger');

const shop = new Shop([
  new Item('iPhone', 1000),
  new Item('MacBook', 1500),
  new Item('iMac', 2000),
]);

logger.log(`Shop products --- ${shop.getProducts()}`);
