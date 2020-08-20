const curry = require('lodash/fp/curry');

const product = (a, b) => a * b;

module.exports = curry(product);
