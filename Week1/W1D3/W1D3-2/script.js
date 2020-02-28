// Opdracht A

/*
sandWichMaker 

- Get slice of bread
- Spread butter
- Add cheese
*/

let sandWichMaker = function (topping) {
    console.log("Get piece of bread.");
    console.log("Spread butter.");
    console.log("Add " + topping);
    console.log("There you go, a sandwich with ",topping);

}

sandWichMaker("ham")


// Opdracht B

// Function Declaration
function makeSandwich(topping) {
    console.log("There you go, a sandwich with ",topping);
}

// Function Call 
makeSandwich("Cheese");
makeSandwich("Ham");


// Opdracht C

const calculateDiscountedPrice = function(totalAmount, discount) {
    return Math.round(totalAmount - discount);
}


console.log(calculateDiscountedPrice(30, 13));

// Opdracht D

const discountAccepted = function(totalAmount, discount) {
    if (totalAmount > 25) {
    return Math.round(totalAmount - discount);
    }
    else {
    return totalAmount;
    }
}

console.log(discountAccepted(26, 15));