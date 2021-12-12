const getNthElement = (index, array) => 
{ if (index > array.length - 1) {
    return array[index - array.length];
}
  return array[index]// your code here
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');  // your code here
};

const addToArray = (element, array) => {
  array.push(element);// your code here
};

const addToArray2 = (element, array) => {
  return array.concat(element);
    // your code here
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
   // your code here
};

const numbersToStrings = numbers => {
  return numbers.map(String); // your code here
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());

 // your code here
};

const reverseWordsInArray = strings => {
  return strings.map(string => {
    return string
      .split('')
      .reverse()
      .join('');
  });
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
  }; // your code here

  const removeNthElement2 = (index, array) => {
    let element = array[index]
    const newArr = array.filter((word)=>{
      return word !== element
    })
    return newArr
  };
  
  const elementsStartingWithAVowel = strings => {
    const startsWithVowel = strings.filter((string)=>{
      string= string.toLowerCase()
      return string[0] === "a" || string[0] === "e" || string[0] === "i" || string[0] === "o" || string[0] === "u"
    })
    return startsWithVowel
  };
  
  const removeSpaces = string => {
    // convert string to array
    //filter out spaces
    // join array to string & return
    let array = string.split("")
    const noSpaces = array.filter((word)=>{
      return word !== " "
    })
    return noSpaces.join("")
  };
  
  const sumNumbers = numbers => {
    let total = numbers.reduce((a,b)=>{
      return a+b
    }, 0)
    return total
  };
  
  const sortByLastLetter = strings => {
    let sortedByLastLetter = strings.sort((a,b)=>{
      a = a[a.length-1]
      b = b[b.length-1]
  
      if (b > a) {
        return -1;
      }
      if (a > b) {
          return 1;
      }
      return 0;
    })
    return sortedByLastLetter
  };

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
