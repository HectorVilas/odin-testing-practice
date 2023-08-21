test('Capitalize text: "test text" becomes "Test text"', () => {
  expect(capitalize('test text')).toMatch('Test text');
  expect(capitalize('test text')).not.toMatch('Test Text');
});

test('Reverse string: "Reverse this!" becomes "!siht esreveR"', () => {
  expect(reverseString('Reverse this!')).toMatch('!siht esreveR');
});

test('Calculator: 2 + 2 must be 4', () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add(2, 2)).not.toBe(22);
});
test('Calculator: 5 - 2 must be 3', () => {
  expect(calculator.divide(5, 2)).toBe(3);
  expect(calculator.divide(5, 2)).not.toBe(-3);
});
test('Calculator: 10 / 2 must be 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.divide(10, 2)).not.toBeCloseTo(0.2);
});
test('Calculator: 3 * 3 must be 9', () => {
  expect(calculator.multiply(3, 3)).toBe(9);
});

test('Caesar Cipher: "Hello, Odin!" becomes "Ifmmp, Pejo!"', () => {
  const test = 'Hello, Odin!';
  expect(caesarCipher(test)).toBe('Ifmmp, Pejo!');
  expect(caesarCipher(test)).not.toBe('ifmmp, pejo!');
  expect(caesarCipher(test)).not.toBe('Ifmmp Pejo');
});

test('Analyze array: [1,8,3,4,2,6] must return { average: 4, min: 1, max: 8, length: 6 }', () => {
  const test = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
  };
  expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual(test);
});
