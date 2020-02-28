// Function assignGrade

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } 
    else if (score > 80) {
        return 'B';
    } 
    else if (score > 70) {
        return 'C';
    } 
    else if (score > 65) {
        return 'D';
    } 
    else {
        return 'F';
    }
}

// For loop grades

for (score = 60; score <= 100; score++) {
    console.log("You got a " + assignGrade(score));
}