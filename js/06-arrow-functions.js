;
(function() {
  // an array of names:

  const names = ['Wes', 'Kait', 'Lux'];
  console.log("array of names: " + names);

  // calc square root

  const numbers = [16, 25, 36];
  const roots = numbers.map(Math.sqrt);
  console.log("square root of " + numbers + " are " + roots);

  // map and call

  const map = Array.prototype.map;
  const word = 'Hello World';
  const a = map.call(word, function(x) {
    return x.charCodeAt(0); });
  const b = map.call(word, function(y) {
    return y; });
  console.log("char code for '" + word + "' is: " + a + " and letters are: " + b);

  //add `'Bos'` to the end of all three of these. 

  const fullNames = names.map(function(name) {
    return `${name} Bos`;
  });
  console.log("add Bos to the end: " + fullNames); // Wes Bos, Kait Bos, Lux Bos

  // Turn it into an Arrow Function

  const fullNames2 = names.map((name) => { // delete the keyword `function` and add in a fat arrow: `=>`
    return `${name} Boss`;
  });

  console.log("arrow function fullnames: " + fullNames2); // Wes Bos, Kait Bos, Lux Bos

  // Removing Parens With Single Params

  const fullNames3 = names.map(name => { // only one parameter, take out the parentheses
    return `${name} Bossy`;
  });

  console.log("arrow function one parameter fullnames: " + fullNames3); // Wes Bos, Kait Bos, Lux Bos

  // Arrow Function Implicit Return

  const fullNames4 = names.map(name => `${name} bos`); // deleted your curly brackets, an implicit return

  console.log("arrow function implicit return fullnames: " + fullNames4); // Wes Bos, Kait Bos, Lux Bos

  // No Arguments with Arrow Functions

  const fullNames5 = names.map(() => `Cool Bos`);

  console.log("arrow function no args fullnames: " + fullNames5); // Cool Bos, Cool Bos, Cool Bos

  const fullNames6 = names.map(_ => `Cool Boss`); //throwaway variable

  console.log("arrow function no args throwaway fullnames: " + fullNames6); // Cool Bos, Cool Bos, Cool Bos

  // Arrow Functions are Always Anonymous Functions

  function sayMyName(name) { // named function
    console.log(`Hello ${name}`);
  }

  const sayMyName2 = (name) => { console.log(`Hello ${name}!`) }

  sayMyName('Bos');
  sayMyName2('Wes');

})();
