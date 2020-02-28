
const maxAge = 75;
const calculateSupply = function(age, amountPerDay) {
    console.log("You will need ", Math.round(((maxAge - age) * (amountPerDay * 365))), " to last you until the ripe old age of", maxAge);
}

calculateSupply(26, 1.5)
calculateSupply(16, 3)
calculateSupply(35, 2)