const curry = require('lodash/fp/curry');

const sum = (a, b) => a + b;

module.exports = curry(sum);
