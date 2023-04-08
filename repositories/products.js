const Repository = require('./repository');

class ProuctsRepository extends Repository {}

module.exports = new ProuctsRepository('products.json');

