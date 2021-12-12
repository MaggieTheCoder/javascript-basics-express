const createPerson = (name, age) => {
  const person = {
    name: 'name',
    age: 'age'
  };
  return person;
};

const getName = object => {
  return object.name
};

const getProperty = (property, object) => {
  return object[property];
  // your code here
};

const hasProperty = (property, object) => {
 if(object[property]) {
   return true
 }
 else {
   return false
 }
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
};

const getAges = people => {
  const ages = [];
  for (let i=0; i<people.length; i++){
    ages.push(people[i].age)
  }
};

const findByName = (name, people) => {
  for (let i=0; i <people.length; i++){
    if(people[i].name === name) {
      return people[i]
    }
};

const findHondas = cars => {
  let Hondas = [];
  for (let i=0; i<cars.length; i++) {
    if(cars[i].manufacturer === 'Honda'){
      Hondas.push(cars[i])
    }
  }
};

const averageAge = people => {
let sumOfAges = 0;
for(let i = 0; i<people.length; i++){
  sumOfAges = sumOfAges + people[i].age
}
let len = people.length
return sumOfAges/len
};

const createTalkingPerson = (name, age) => {
 const bill ={
   name: name,
   age = age,
   introduce: function(friend){
return `Hi ${friend}, my name is ${this.name} and I am ${this.age}!`
   }
 }
 return bill
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
