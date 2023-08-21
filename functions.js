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
      encrypted += char === chars[charIndex]
        ? chars[(charIndex + 1) % (chars.length)]
        : chars[(charIndex + 1) % (chars.length)].toUpperCase();
    } else {
      encrypted += char;
    }
  });

  return encrypted;
}

module.exports = { capitalize, reverseString, calculator, caesarCipher };