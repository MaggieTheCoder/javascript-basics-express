function sayHello(string) {
  return ('Hello,' + ' ' + string + '!');
}

function uppercase(string) {
  return (string.toUpperCase());
};

function lowercase(string) {
  return string.toLowerCase(); // your code here
};

function countCharacters(string) {
  return string.length; // your code here
};

function firstCharacter(string) {
  return string.charAt(0); // your code here
};

function firstCharacters(string, n) {
  return string.slice(0, n);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
