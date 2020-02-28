let colors = ["Yellow", "Blue", "Red", "Orange"];
let i = 0;


// While loop iterating colors
while (i < colors.length )  {
    console.log(colors[i]);
    i++;
}

// For loop iterating colors
for (i = 0; i < colors.length; i++) {
    
    console.log(colors[i]);
    
}


// For each iterating colors
colors.forEach(color => console.log(color));

// Mijn for loop neemt 3 regels in beslag.
// Mijn forEach loop neemt 1 regel in beslag.
// Leesbaarheid, en andere developers kunnen makkelijker wijzigen aanbrengen en zien wat er gebeurd.
// Zoals ik hierboven al gedaan heb, door met de length property te werken maakt het niet uit hoe groot het object is. Deze is via index te itereren. 