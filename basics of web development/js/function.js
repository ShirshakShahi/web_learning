let a = 1;
let b = 2;
let c = 3;

function averageValues(x, y) {
    console.log("avg of ", x, "and", y, " is ", (x + y) / 2);
}

// alternate way to make function
const sum = (p, q) => {
    return p + q;
} 

/*
console.log("avg of a and b is ", (a + b) / 2);
console.log("avg of a and c is ", (a + c) / 2);
console.log("avg of b and c is ", (c + b) / 2);
*/
averageValues(a, b);
averageValues(a, c);
averageValues(b, c);
let result = sum(a, c);
console.log(result);
console.log(sum(a, c));


const hi = (x, y) => {
    console.log("Hi guys how are you?");
    return (x + y);
}

let h = hi(20, 3);
console.log(h);