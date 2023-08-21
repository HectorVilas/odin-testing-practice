function capitalize(str) {
  const upFirstChar = str[0].toUpperCase();
  const theRest = str.slice(1);
  return upFirstChar + theRest;
}

function reverseString(str) {
  return [...str].reduce((string, char) => char + string);
}

const calculator = (() => {
  const  add = (a, b) => a + b;
  const substract = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;

  return { add, substract, divide, multiply };
})();

function caesarNextChar(char) {
  const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const lowerCase = char.toLowerCase();

  if (chars.includes(lowerCase)) {
    const charIndex = chars.indexOf(lowerCase);
    const nextChar = chars[(charIndex + 1) % (chars.length)];
    return char === chars[charIndex] ? nextChar : nextChar.toUpperCase();
  }
  
  return char;
}

function caesarCipher(str) {
  let encrypted = "";
  
  [...str].forEach((char) => encrypted += caesarNextChar(char));

  return encrypted;
}

function analyzeArray(arr) {
  return {
    average: arr.reduce((total, current) =>  total + current , 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };