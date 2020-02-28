let x = 9;

for (let i = 1; i <= 10; i++) {
    let result = x * i;
    console.log(x + "x" + i + "=" + result);
}


// Bonus nested for loop 
for (let x = 0; x <= 10; x++) {
    for (let i = 0; i <= 10; i++) {
        let result = x * i;
        console.log(x + "x" + i + "=" + result);
    }
}
