const logger = require('./Logger');

class Shop {
  constructor(products) {
    this.products = products;
    logger.log(`Shop created with products --- ${this.products}`);
  }

  getProducts() {
    return this.products;
  }
}
module.exports = Shop;
