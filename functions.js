function capitalize(str) {
  const upFirstChar = str[0].toUpperCase();
  const theRest = str.slice(1);
  return upFirstChar + theRest;
}

function reverseString(str) {
  return [...str].reduce((string, char) => char + string);
}

const calculator = (() => {
  function add(a, b) {
    return a + b;
  }

  function substract(a, b) {
    return a - b;
  }

  function divide(a, b) {
    return a / b;
  }

  function multiply(a, b) {
    return a * b;
  }

  return { add, substract, divide, multiply };
})();

function caesarCipher(str) {
  const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let encrypted = "";
  
  [...str].forEach((char) => {
    if (chars.includes(char.toLowerCase())) {
      const charIndex = chars.indexOf(char.toLowerCase());
      const nextChar = chars[(charIndex + 1) % (chars.length)];
      encrypted += char === chars[charIndex] ? nextChar : nextChar.toUpperCase();
    } else {
      encrypted += char;
    }
  });

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