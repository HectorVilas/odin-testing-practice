const functions = require('./functions');

test('Capitalize text: "test text" becomes "Test text"', () => {
  expect(functions.capitalize('test text')).toMatch('Test text');
  expect(functions.capitalize('test text')).not.toMatch('Test Text');
});

test('Reverse string: "Reverse this!" becomes "!siht esreveR"', () => {
  expect(functions.reverseString('Reverse this!')).toMatch('!siht esreveR');
});

test('Calculator: 2 + 2 must be 4', () => {
  expect(functions.calculator.add(2, 2)).toBe(4);
  expect(functions.calculator.add(2, 2)).not.toBe(22);
});
test('Calculator: 5 - 2 must be 3', () => {
  expect(functions.calculator.substract(5, 2)).toBe(3);
  expect(functions.calculator.substract(5, 2)).not.toBe(-3);
});
test('Calculator: 10 / 2 must be 5', () => {
  expect(functions.calculator.divide(10, 2)).toBe(5);
  expect(functions.calculator.divide(10, 2)).not.toBeCloseTo(0.2);
});
test('Calculator: 3 * 3 must be 9', () => {
  expect(functions.calculator.multiply(3, 3)).toBe(9);
});

test('Caesar Cipher: "Hello, Odin!" becomes "Ifmmp, Pejo!"', () => {
  const test = 'Hello, Odin!';
  expect(functions.caesarCipher(test)).toBe('Ifmmp, Pejo!');
  expect(functions.caesarCipher(test)).not.toBe('ifmmp, pejo!');
  expect(functions.caesarCipher(test)).not.toBe('Ifmmp Pejo');
});

test('Analyze array: [1,8,3,4,2,6] must return { average: 4, min: 1, max: 8, length: 6 }', () => {
  const test = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
  };
  expect(functions.analyzeArray([1,8,3,4,2,6])).toStrictEqual(test);
});
