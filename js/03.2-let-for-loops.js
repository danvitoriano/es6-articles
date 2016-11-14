/*
  // 03.2 - Use let with for Loops
  */

// if I type `i` into the console, it returns `10`.
for (var i = 0; i < 10; i++) {
  console.log("log i: " + i);
}

// If we run this, all of them are 10. The reason that we have that is because, `console.log(i)`  will run immediately and reference whatever `i` is.
for (var j = 0; j < 10; j++) {
  console.log(j);
  setTimeout(function() {
    console.log('The number is ' + j);
  }, 1000);
}

// If you run it now, after a second we'll log zero through nine.
for (let k = 0; k < 10; k++) {
  console.log(k);
  setTimeout(function() {
    console.log('The number is ' + k);
  }, 1000);
}
