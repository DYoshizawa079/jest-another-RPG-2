const randomJSfile = require('../lib/random.js');

// TEST 1: 
// Test whether the function checkIfEqual in random.js is supposed to do as it should (check whether two given values are equal)
const checkIfEqual = randomJSfile.checkIfEqual;
// Passes two values into that function to see whether it returns "true" as it's supposed to
test('checks if 10 is equal to 10', () => {
  expect(checkIfEqual(10, 10)).toBe(true);
});

// TEST 2:
// Test whether the function randomNumber in random.js generates numbers between 1 and 10.
const randomNumber = randomJSfile.randomNumber;

test('gets random number between 1 and 10', () => {
  expect(randomNumber()).toBeGreaterThanOrEqual(1);
  expect(randomNumber()).toBeLessThanOrEqual(10);
});