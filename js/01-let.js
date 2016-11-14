;
(function() {
  /*
  // 01 - let is block "{}" scope 
  */
  var age = 100;
  if (age > 12) {
    let dogYears = age * 7;
    console.log(`You are ${dogYears} dog years old!`);
  }
  console.log(dogYears); // error because it's scoped only to the above block

  /*
  // let can be update but not redefined 
  */
  let points = 50;
  let winner = false;
  if (points > 40) {
    let winner = true
    console.log(winner); // true
  }
  console.log(winner); // false
})();
