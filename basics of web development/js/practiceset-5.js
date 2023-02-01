// QN NO 1
// let num = [1, 2, 3, 4, 5, 6];
// console.log(num);
// let ask = prompt("Enter new number to be pushed in array");
// ask = Number.parseInt(ask);
// num.push(ask);
// console.log(num);


// QN NO 2

let num = [1, 2, 3, 4, 5, 6];
console.log(num);
let ask;
do {
    ask = prompt("Enter new number to be pushed in array");
    ask = Number.parseInt(ask);
    num.push(ask);
    console.log(num);
} while (ask != 0);

// QN NO 3

let number = [10, 25, 34, 400, 500000, 6450, 77, 81, 94];
let check = number.filter((values) => {
    return values % 10 == 0;
})
console.log(check);

// QN NO 4

let test = [1, 2, 3, 4, 5, 6];
// let shahi = test.map((values) => {
//     return (values ** 2);
// })
const shahi = (values) => {
    return values ** 2;
}
let ram = test.map(shahi);
console.log(ram);


// QN NO 5
let test_2 = [5, 4, 3, 2, 1];
let haha = test_2.reduce((a, b) => {
    return a * b;
})
console.log(haha);