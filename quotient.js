const curry = require('lodash/fp/curry');

const quotient = (a, b) => a / b;

module.exports = curry(quotient);
