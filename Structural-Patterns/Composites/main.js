const CatalogGroup = require('./CatalogGroup');
const CatalogItem = require('./CatalogItem');

const catalogGroup = new CatalogGroup('Mobile Phones', [
  new CatalogItem('iPhone', 1000),
  new CatalogItem('MacBook', 1500),
  new CatalogItem('iMac', 2000),
]);

// catalogGroup.print();
// console.log(catalogGroup.total);

const catalogGroup2 = new CatalogGroup('Electronics', [
  new CatalogItem('TV', 1000),
  new CatalogItem('Computer', 1500),
  new CatalogItem('Monitor', 2000),
  catalogGroup,
]);


catalogGroup2.print();
console.log(catalogGroup2.total);