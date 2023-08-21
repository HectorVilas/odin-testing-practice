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

module.exports = { capitalize, reverseString, calculator };