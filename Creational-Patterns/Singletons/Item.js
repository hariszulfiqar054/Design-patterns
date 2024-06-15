const logger = require('./Logger');

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    logger.log(`Item created with name --- ${this.name} and price --- ${this.price}`);
  }
}

module.exports = Item;
