;
(function() {
  /*
  // 03.1 - Immediately-Involved Function Expression
  */
  (function() {
    var name = 'wes';
    console.log(name);
  })();

  /*
  // "let" and "const" use "block scope".
  */
  console.log(name); // returns window.name
  {
    const name = 'wes';
    console.log(name); // returns wes
  }
})();
