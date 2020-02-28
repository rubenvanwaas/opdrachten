const sumNum = function (...numbers) {
    return numbers.reduce((prev, current) => {
        return prev + current;
    })
}

console.log(sumNum(1,2,3,4))

const sumNumSpread = function (x, y, z) {
    return x + y +z;
}

let nums = [1,2,3];

console.log(sumNumSpread(...nums))