// Deel 1

let person = {
    name: "Ruben",
    age: 26,
    evaluations: [7,10,9]
};

console.log(person);

console.log(person.name);
console.log(person.age);

console.log(person.age,person.name);
console.log(person["age"], person["name"]);
console.log(person.evaluations);

// Deel 2

let myArray = ['Green', 'Yellow', 'Blue'];

console.log(myArray);
console.log(myArray.length);
console.log(myArray[0]);
console.log(myArray[myArray.length -1]);
myArray.push('Purple');
console.log(myArray);
myArray.push(5);
console.log(myArray);
myArray.push({greeting: "Hi I am an object"});
console.log(myArray);
console.log(myArray[myArray.length -1].greeting);

// Deel 3

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
		food: {
			favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
  },
	{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
			favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
  },
	{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
			favourite_food: "meaty things",
      medium_liked_food: "tuna", 
      disliked_food: "canned food"
     }
  }
]

// Kattenras Naam laatste item
console.log("Kattenrasnaam laatste kat", catBreeds[catBreeds.length -1].name);

// Energy level eerste item
console.log("Energy level kat 1: ", catBreeds[0].energy_level);

// Temperament kat 2
console.log("Temperament kat 2: ", catBreeds[1].temperament);

// Laatste temperament kat 3
const temperamentKat3 = catBreeds[2].temperament;
console.log("Temperament kat 3: ", catBreeds[2].temperament[temperamentKat3.length -1]);

// Favo voedsel kat 3
console.log("Favoriete voedsel kat 3: ", catBreeds[2].food.favourite_food);