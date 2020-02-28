//A

let arrayWithWords = ["nice","awesome","tof"]

const addTheWordCool = function(array){

    // add your code

    array.push("cool");
    return array;
}
console.log("Add cool:", addTheWordCool(arrayWithWords));

//B

const myArray = ['appels', 'peren', 'citroenen'];
const amountOfElementsInArray = function () {
    return myArray.length;
    
}

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));

//C

const myArray2 = ["Belgie", "Nederland", "Luxemburg"];
const selectBelgiumFromBenelux = function () {
    return myArray2[0];
}

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));

//D

const myArray3 = ["Haas", "Cavia", "Kip", "Schildpad"];
const lastElementInArray = function () {
    return myArray3[myArray3.length -1];
}


console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

//E

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

const impeachTrumpSlice = function(array) {
  return presidents.slice(-3);
}
const impeachTrumpSplice = function(array) {
    return presidents.splice(1,3);
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

//F

const myArrayString = ['Winc', 'Academy', 'is', 'leuk', ';-}'];
const stringsTogether = function () {
    return myArrayString.join(' ');
}


console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))

//G
const myArrayNumber1 = [1,2,3];
const myArrayNumber2 = [4,5,6];

const combineArrays = function () {
    return myArrayNumber1.concat(myArrayNumber2);
}


console.log(combineArrays([1,2,3], [4,5,6]));