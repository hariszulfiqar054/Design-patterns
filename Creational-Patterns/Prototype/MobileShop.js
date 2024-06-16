class MobileShop {
  constructor(name = 'unknown') {
    this.name = name;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  clone() {
    const prototype = Object.getPrototypeOf(this);
    const clone = Object.create(prototype);
    clone.name = this.name;
    clone.products = [...this.products];
    return clone;
  }
}

module.exports = MobileShop;
