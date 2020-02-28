const superheroes = [
    {
      "name": "Batman",
      "publisher": "DC Comics",
      "alter_ego": "Bruce Wayne",
      "first_appearance": "Detective Comics #27",
      "weight": "210"
    },
    {
      "name": "Superman",
      "publisher": "DC Comics",
      "alter_ego": "Kal-El",
      "first_appearance": "Action Comics #1",
      "weight": "220"
    },
    {
      "name": "Flash",
      "publisher": "DC Comics",
      "alter_ego": "Jay Garrick",
      "first_appearance": "Flash Comics #1",
      "weight": "195"
    },
    {
      "name": "Green Lantern",
      "publisher": "DC Comics",
      "alter_ego": "Alan Scott",
      "first_appearance": "All-American Comics #16",
      "weight": "186"
    },
    {
      "name": "Green Arrow",
      "publisher": "DC Comics",
      "alter_ego": "Oliver Queen",
      "first_appearance": "All-American Comics #16",
      "weight": "195"
    },
    {
      "name": "Wonder Woman",
      "publisher": "DC Comics",
      "alter_ego": "Princess Diana",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "165"
    },
    {
      "name": "Blue Beetle",
      "publisher": "DC Comics",
      "alter_ego": "Dan Garret",
      "first_appearance": "Mystery Men Comics #1",
      "weight": "145"
  },
  {
      "name": "Spider Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Peter Parker",
      "first_appearance": "Amazing Fantasy #15",
      "weight": "167"
  },
  {
      "name": "Captain America",
      "publisher": "Marvel Comics",
      "alter_ego": "Steve Rogers",
      "first_appearance": "Captain America Comics #1",
      "weight": "220"
  },
  {
      "name": "Iron Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Tony Stark",
      "first_appearance": "Tales of Suspense #39",
      "weight": "250"
  },
  {
      "name": "Thor",
      "publisher": "Marvel Comics",
      "alter_ego": "Thor Odinson",
      "first_appearance": "Journey into Myster #83",
      "weight": "200"
  },
  {
      "name": "Hulk",
      "publisher": "Marvel Comics",
      "alter_ego": "Bruce Banner",
      "first_appearance": "The Incredible Hulk #1",
      "weight": "1400"
  },
  {
      "name": "Wolverine",
      "publisher": "Marvel Comics",
      "alter_ego": "James Howlett",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "200"
  },
  {
      "name": "Daredevil",
      "publisher": "Marvel Comics",
      "alter_ego": "Matthew Michael Murdock",
      "first_appearance": "Daredevil #1",
      "weight": "200"
  },
  {
      "name": "Silver Surfer",
      "publisher": "Marvel Comics",
      "alter_ego": "Norrin Radd",
      "first_appearance": "The Fantastic Four #48",
      "weight": "unknown"
    }
  ]

// Super hero namen
const superHeroNames = superheroes.map((name) => name.name)
console.log(superHeroNames);

// Super hero lijst met gewicht onder 190
const lightSuperHero = superheroes.filter((name) => name.weight < 190)
console.log(lightSuperHero);

// superhero lijst met gewicht gelijk aan 200
const superHeroNames200p = superheroes.filter((name) => name.weight === "200").map((name) => name.name)
console.log(superHeroNames200p);

// fist appearances van de superheroes
const firstAppearance = superheroes.map((firstAppearance) => firstAppearance.first_appearance)
console.log(firstAppearance);

// lijst van superheroes in publisher DC
const superheroesDc = superheroes.filter((name) => name.publisher === "DC Comics")
console.log(superheroesDc);

// lijst van superheroes in publisher Marvel
const superheroesMarvel = superheroes.filter((name) => name.publisher === "Marvel Comics")
console.log(superheroesMarvel);

// totaal gewicht superheroes DC
const weightDc = superheroesDc.map((hero) => parseInt(hero.weight)).reduce((currentTotal, number) => number + currentTotal)

console.log(weightDc, "pounds");

// totaal gewicht superheroes Marvel , ermee rekende houden dat er een "unknown" weight is, waardoor dat eerst gechecked moet worden.
const weightMarvel = superheroesMarvel.map((hero) => parseInt(hero.weight))

const newWeightMarvel = weightMarvel.filter((hero) => !Number.isNaN(hero)).reduce((currentTotal, number) => number + currentTotal)

console.log(newWeightMarvel, "pounds");

// superhero met het hoogste gewicht
/*
const listSuperheroesSorted = superheroes.map((hero) => parseInt(hero.weight)).sort((a, b) => (a.weight || 0) - (b.weight || 0))

console.log(listSuperheroesSorted);
*/

let maxWeight = 0;

 highestWeight = superheroes.forEach(superhero => {
    const weight = parseInt(superhero.weight)
    if (weight > maxWeight) {
        maxWeight = weight;
    }
    if (weight === maxWeight) {
        return superhero.name;
    }
})  



console.log(maxWeight)



/*
const weightSuperheroes = superheroes.map((hero) => parseInt(hero.weight)).filter((hero) => !Number.isNaN(hero))

const highestWeight = Math.max.apply(Math, weightSuperheroes);

console.log(highestWeight);

*/




