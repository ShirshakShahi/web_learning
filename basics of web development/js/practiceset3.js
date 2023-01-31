// QN 1
const marks = {
    harry: 98,
    rohan: 70,
    aakash: 7
}

for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

// QN no 2 using for in loop

for (let key in marks) {
    console.log("The marks of " + key + " are " + marks[key]);
}

// QN NO 3
let cn = 95;
let ch;
do {
    ch = prompt("Enter correct number");
    console.log("try again");
} while (ch != cn);

// QN NO 4  mean of 5 numbers using function
const mean = (a, b, c, d, e) => {
    console.log("Mean of the five numbers are " + ((a + b + c + d + e) / 5))
}
let v, w, x, y, z;
v = prompt("Enter first number");
w = prompt("Enter second number");
x = prompt("Enter third number");
y = prompt("Enter fourth number");
z = prompt("Enter fifth number");
v = Number.parseInt(v);
w = Number.parseInt(w);
x = Number.parseInt(x);
y = Number.parseInt(y);
z = Number.parseInt(z);
mean(v, w, x, y, z);
mean(10, 20, 30, 40, 50);
