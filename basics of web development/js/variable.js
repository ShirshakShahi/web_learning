let a = 5// a contains 5
console.log(a);
a = "shirshak";
console.log(a);
a = 0.555;
console.log(a);
let shirshak8 = 55;
console.log(shirshak8);

// var let and const difference

console.log("differences between let var and constant");

// var is global scope and can be redeclared

var firstNumber = 100;
{
    let firstNumber = 200;
    console.log(firstNumber);
}
console.log(firstNumber);

// let is block scope and cannot be redeclared

let secondNumber = 55;
secondNumber = "shirshak shahi thakuri"; //let can be updated though
console.log(secondNumber);
let thirdNumber = 99;
console.log(thirdNumber);

//const cannot be changed and cannot be assigned again and again

const author = "hello i am a noob here please help me";
console.log(author);

let mom;
mom = "Laxmi Malla Shahi Thakuri";
console.log("My mother's name is " + mom);

let bigBrother = null;
console.log(bigBrother);