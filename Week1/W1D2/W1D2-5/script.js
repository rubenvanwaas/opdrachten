const age = 26;

if (age >= 18 && age <= 25) {
    console.log("You get a 50% discount!");
}
else {
    console.log("Enjoy your evening!")
}

const name = "Bram";

if (name === "Bram" || name === "Sarah") {
    console.log("Enjoy your free beer at the bar!")
}
else {
    console.log("Enjoy your evening!");
}

const moneyspent = 100;

if (moneyspent > 25 && moneyspent <= 50) {
    console.log("You get a portion of free fried snacks!");
}
else if (moneyspent > 50 && moneyspent <= 99 ) {
    console.log("You get a portion of free nachos!");
}
else if (moneyspent >= 100) {
    console.log("You get a free bottle of champagne!");
}
else {
    console.log("Enjoy your evening!");
}