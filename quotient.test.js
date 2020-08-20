const quotient = require('./quotient');

test('divides 1 / 2 to equal .5', () => {
  expect(quotient(1)(2)).toBe(.5);
});
