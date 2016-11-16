// **Arrow functions don't replace regular functions**. 

// not having the keyword `this`

// ### #1 — click handlers

// First of all, I've got this big button that says 'Push me':

const btn = document.createElement("button");
const btnId = document.createAttribute("id");
const body = document.querySelector('body');
const btnTxt = document.createTextNode('Push me');
const style = document.createElement('style');

btnId.value = "pushy";
btn.setAttributeNode(btnId);
btn.appendChild(btnTxt);
body.appendChild(btn);
style.type = "text/css";
style.innerHTML = "button {font-size: 100px; }" 
    + ".on {background: #ffc600;}";
document.getElementsByTagName('head')[0].appendChild(style);

const button = document.querySelector('#pushy');
button.addEventListener('mouseover', () => {
    console.log(this); // Window! `this` is not bound to that element w/ arrow function
    this.classList.toggle('on');
});

button.addEventListener('click', function() {
    console.log(this);
    this.classList.toggle('on');
});

// ### #2: Object Methods

// when you need a method to bind to an object. 

const person = {
    points: 23,
    score: function () { // if we use arrow function here, `this` is Window 
        this.points++;
        return this.points;
    }
}

console.log("person.points: ",person.points);
console.log("person.score() x 1: ",person.score());
console.log("person.score() x 2: ",person.score());
console.log("person.score() x 3: ",person.score());
console.log("person.points: ",person.points);

// ### 3: Prototype Methods

class Car { // make new cars
    constructor(make, colour) { // add a prototype method
        this.make = make;
        this.colour = colour;
    }
}

const beemer = new Car("BMW", "red");
const subie = new Car("Subaru", "white");
// console.log("my cars are: ", beemer, subie);

// Now, after the fact, I added on this prototype method:

Car.prototype.summarize = function() {
    return `This car is a ${this.make} in the colour ${this.colour}`;  
};

console.log(subie.summarize());
console.log(beemer.summarize());

// ### 4: When you need an arguments Object

// For our last example, this is a little bit different:

// ```js
// const orderChildren = () => {
//     console.log(arguments);
//     const children = Array.from(arguments);
//     return children.map((child, i) => {
//         return `${child} was child #${i + 1}`;
//     })
// }
// ```

// It doesn't have to do with the keyword "this," but we don't have access to the `arguments` object when you use an arrow function.

// This is helpful for when you want to run a function like `orderChildren` here, which can take unlimited arguments.

// It might take one, it might take 100. It's going to just say "This child was born #1", or whichever.

// For an example, let's type into the console `orderChildren('jill', 'wes', 'jenna')`, which passes in `jill` as our first argument, `wes`, as our second, and `jenna` as our third. When you run it, you'll get an error: `ReferenceError, arguments is not defined`. 

// this is because `arguments` is a keyword that we have in our `orderChildren` that's going to give us an `Array` or array-ish value of everything that was passed in. 

// However, you do not get the `arguments` object if you use an arrow function. When you use a regular function, which is going to give us the actual content that we need.

// ```js
// const orderChildren = function() {
//     console.log(arguments);
//     const children = Array.from(arguments);
//     return children.map((child, i) => {
//         return `${child} was child #${i + 1}`;
//     })
// }
// ```

// **Note:** Another fix for this is to use a `...rest` param to collect all the arguments into an array. We will learn all about that in the rest videos and blog posts!

// Again, to go through all those really quickly. Make sure that you aren't just using arrow functions willy-nilly. In general, if you do not need the `arguments` object or you do not need `this`, or you know that you will not need it in the future, then you can feel free to go ahead and use an arrow function on everything else.
