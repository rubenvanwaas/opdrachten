//A

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]

/*
const findSpiderMan = function (superheroes) {
    return superheroes.find(function (superhero) {
        return superhero.name === "Spiderman";
    })
}
*/

findSpiderMan = superheroes => superheroes.find((superhero) => superhero.name === "Spiderman")

function findSuperhero (name) {
    return superheroes.find(function (superhero){
        return superhero.name === name
    })
    }

    console.log(findSuperhero("Batman"));
    console.log(findSpiderMan(superheroes)) 
    // Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//B 
const doubleArrayValuesNumbers = [1, 2, 3];

/*
const doubleArrayValues = function (array) {
    return array.map(function (number) {
        return number * 2;
    })
}
*/

doubleArrayValues = (array) => array.map((number) => number * 2)

console.log(doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]

//C
const myNumberArray = [1, 4, 3, 6, 9, 7, 11];

/*
const containsNumberBiggerThan10 = function (number) {
    return number.some(function(biggerThan10) {
        return biggerThan10 > 10;
    })
}
*/

containsNumberBiggerThan10 = number => number.some(biggerThan10 => biggerThan10 > 10);

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true

//D
const countryArray = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];

/*
const isItalyInTheGreat7 = function (array) {
    return array.includes("Italy");
}
*/

isItalyInTheGreat7 = array => array.includes("Italy");


console.log(isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']));
// result should be true

//E 
const numberArray = [1, 4, 3, 6, 9, 7, 11];

/*
const tenfold = function (ten) {
    return ten.map(function (fold10) {
        return fold10 * 10;
    })
}
*/

tenfold = (ten) => ten.map(fold10 => fold10 * 10)
    

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]

//F 
const myArrayNumberBelow100 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ];

/*
const isBelow100 = function (checkMethod) {
    return checkMethod.every(function (checkBelow100) {
        return checkBelow100 < 100;
    })
}
*/

isBelow100 = checkMethod => checkMethod.every(checkBelow100 => checkBelow100 < 100)

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// result should be: false

//G 

const arrayBigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

/*
const bigSum = function(array) {
    return array.reduce((currentTotal, number) => {
        return number + currentTotal;
    })
}
*/

bigSum = (array) => array.reduce((currentTotal, number) => number + currentTotal)
    

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]));
// result should be 1118