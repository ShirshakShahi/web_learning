// QN 1
const age = prompt("what is your age");
if (age > 10 && age < 20) {
    alert("your age lies between 10 and 20 ");
} else {
    alert("your age doesn't lie between 10 and 20 ");
}

// QN 2
const value = prompt("what is your value for this question");
switch (value) {
    case '1': alert("your value is 1");
        break;
    case '2': alert("your value is 2");
        break;
    case '3': alert("your value is 3");
        break;
    case '4': alert("your value is 4");
        break;
}

//QN 3

let number = prompt("Enter number ");
number = Number.parseInt(number);
if (number % 2 == 0 && number % 3 == 0) {
    console.log(number, " can be divided by 2 and 3 ");
} else {
    console.log("your number ", number, " cannot be divided by 2 and 3 ");
}

//QN 4

let num = prompt("Enter number ");
num = Number.parseInt(number);
if (num % 2 == 0 || number % 3 == 0) {
    console.log(num, " can be divided by 2 and 3 ");
} else {
    console.log("your number ", num, " cannot be divided by 2 and 3 ");
}


//QN 5
let ternary = 18;
console.log(ternary == 18 ? " true " : "not true");