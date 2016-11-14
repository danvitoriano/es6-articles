;
(function() {
  // 07 - more arrow functions

  // ### Arrow Function Implicit Return an Object Literal

  const race = '100m Dash';
  const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

  // put parentheses around the object literal so that the arrow function knows it's an object
  const win = winners.map((winner, i) => ({ name: winner, race, place: i + 1 })); // two arguments, `winner` string and `i`  for index, race var name = property

  console.log("returns winners object: ");
  console.log(win); //  returns 3 objects like: { name: 'Hunter Gath', place: 1, race: '100m Dash' }

  // ### Viewing our Data

  console.table(win);

  // ### Arrow Function Filtering Example

  const ages = [23, 62, 45, 234, 2, 62, 234, 62, 34];

  // filter list for people who are older than 60

  const old = ages.filter(age => age >= 60); // if the age is greater or equal to 60, it will return `true` and thus be put into the `old` array. 

  console.log("filter ages greater or equal to 60: " + old); // 62,234,62,234,62
})();
