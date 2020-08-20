const curry = require('lodash/fp/curry');

const difference = (a, b) => a - b;

module.exports = curry(difference);
