let person = {};

person.name = "Bill Gates";
person.age = 64;

console.log(person); // output: { name: 'Bill Gates', age: 64 }

let billGates = Object.assign({}, person);

person.age = 64;

console.log(billGates);