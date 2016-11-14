// 09 - Default function arguments 

// `calculateBill` takes in three things: the `total` cost of your meal, how much `tax` we need to pay, and how much you would like to `tip` your waiter

function calculateBill(total, tax, tip) {
    return total + (total * tax) + (total * tip);
}

const totalBill = calculateBill(100, 0.13, 0.15); // return the total
console.log("subtotal: 100, tax: 0.13, tip: 0.15");
console.log("total: "+totalBill); // 128


function calculateBill2(total, tax, tip) {
    tax = tax || 0.13; // fallback to the default if you pass in `0`, `null`, `false` or any other falsy value 
    tip = tip || 0.15;
    return total + (total * tax) + (total * tip);
}

const totalBill2 = calculateBill2(100);
console.log(totalBill2);

// simply set it when we define our function
function calculateBill3(total, tax = 0.13, tip = 0.15) { 
    return total + (total * tax) + (total * tip);
}

const totalBill3 = calculateBill3(100,undefined, 0.25); // undefined if no value is passed, accept default
console.log(totalBill3); // 138