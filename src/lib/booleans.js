function negate(a) {
  if (a === true || a === false) {
    return !a;
  }
}

function both(a, b) {
  if (a === true && b === true) {
    return true;
  } 
 else {
  return false;
  }
};

function either(a, b) {
  if (a === true || b === true) {
    return true;// your code here
  } else {
    return false;
  }
  };

function none(a, b) {
  if (a ===! true && b ===! true) {
  return true;
  } else { return false;
  }// your code here
};

function one(a, b) {
  if (a === true) {
    return b === false;
  } else if (a === false) {
    return b === true;
  } // your code here
};

function truthiness(a) {
  if (a) {
    return true;
  }
  else {
    return false;
  
  }
};

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }// your code here
};

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }// your code here
};

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  } else { 
    return false;
  }// your code here
};

function isOdd(a) {
  if (a % 2 === 0) {
    return false;
  } else {
    return true;
  }// your code here
};

function isEven(a) {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }// your code here
};

function isSquare(a) {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  } else {
    return false;
  }
 };

function startsWith(char, string) {
  if (string.startsWith(char)) {
    return true;
  } else {
    return false;
  }// your code here
};

function containsVowels(string) {
  if (string.match(/[aeiou]/gi)) {
    return true;
  } else {
    return false;
  }// your code here
};

function isLowerCase(string) {
  if (string === string.toLowerCase()) {
    return true;
  } else {
    return false;
  }
    // your code here
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};