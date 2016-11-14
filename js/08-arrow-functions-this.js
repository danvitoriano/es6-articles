// `this` keyword does not get rebound with arrow functions

const divWrap = document.createElement("div");
const divBox = document.createElement("div");
const h2 = document.createElement("h2");
const p = document.createElement("p");
const div = document.createElement("div");
const h2Text = document.createTextNode("Dan");
const pText = document.createTextNode("@dnvtrn");
const divText = document.createTextNode("Push the box");
const attWrap = document.createAttribute("class");
const attBox = document.createAttribute("class");
const attP = document.createAttribute("class");
const attDiv = document.createAttribute("class");
attWrap.value = "wrap";
attBox.value = "box";
attP.value = "social";
attDiv.value = "help";


const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = 
' .wrap {display: flex; justify-content: center; align-items: center; font-family: sans-serif; font-weight: 100; color: white;}' + 
' .box {background: #232323 center fixed no-repeat; width: 20px; height: 20px; padding: 5px; transition: width 0.2s, height 0.6s; position: relative; }'+
' .help {font-family: sans-serif; font-weight: 100;color: #FFB400; }'+
' .box.opening { width: 200px; height: 200px; }'+
' .box h2 { position: absolute;width: 100%;font-size: 100px;transform: translateX(-200%);transition: all 0.5s;top: 0;}'+
' .box p {position: absolute;width: 100%;transform: translateX(200%); transition: all 0.5s;bottom: 0;}'+
' .box.open > * {transform: translateX(0%);}';
document.getElementsByTagName('head')[0].appendChild(style);

h2.appendChild(h2Text);
p.appendChild(pText);
div.appendChild(divText);
divWrap.setAttributeNode(attWrap);   
divBox.setAttributeNode(attBox);
div.setAttributeNode(attDiv); 
p.setAttributeNode(attP);   

const body = document.querySelector('body');

body.appendChild(div);
body.appendChild(divWrap);
divWrap.appendChild(divBox);
divBox.appendChild(h2);
divBox.appendChild(p);

const box = document.querySelector('.box');
console.log(".box element:", box);

// `this` is **not rebound**
// inherited form whatever the parent scope is
// it's not being bound to anything. It ends up by the window

box.addEventListener('click', function() {  // can't use arrow function here: console.log(this)==`Window`
    // let self = this; // to not rebound this scope in sub functions
    let first = 'opening';
    let second ='open';

    if (this.classList.contains(first)) {
      [first, second] = [second, first]; // to switch two variables with ES6 you can simply put them in an array
    }
    this.classList.toggle(first);
    setTimeout(() => { // set timeout 500 arrow function
        // console.log(self); // this with arrow function is **not rebound**
       console.log(this); // this inside an arraow function was not scope rebounded 
       this.classList.toggle(second); 
    }, 250);
});