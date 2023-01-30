console.log("Operators in JavaScript");
let a = 50;
let b = 40;
console.log("a = " + a);
console.log("b = " + b);
console.log("a + b = ", a + b);
console.log("a - b =", a - b);
console.log("a * b = ", (a * b));
console.log("a / b =", a / b);
console.log("a ** b =", a ** b);
console.log("a % b =", a % b);
console.log("Increment Operator ", a++);
console.log("Increment Operator ", ++a);
console.log("Decrement Operator", --a);
console.log("Decrement Operator", a--);
console.log(a);

// assignment operator

let assignment = 5;
console.log(assignment);
assignment += 8;
console.log(assignment);

// comparision operator

let comp1 = 665467;
let comp2 = 64464;
console.log("comp1 == comp2 is", comp1 == comp2);
console.log("comp1!= comp2 is", comp1 != comp2);
console.log("comp1 === comp2 is", comp1 === comp2);
console.log("comp1!== comp2 is", comp1 !== comp2);

// comparators
console.log("comp1 > comp2 is", comp1 > comp2);

// logical operator
let a1 = 10;
let a2 = 5;
console.log(a1 > a2 && a2 == 5 && a1 == (20 - 10))//both must be true to return true
console.log(a1 > a2 || a1 == 5);//any one is true then returns true
console.log(!true);//makes true -> false and vice-versa