/*
// const scope cannot be update
*/
const key = 'abc123';

/*
// const object properties and values can change
*/
const person = {
  name: 'Wes',
  age: 28
}
person.age = 29;
console.log(person.age); // 29

/*
// immutable const object
*/
Object.freeze(person); //developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
person.age = 30;
console.log(person.age); // 29