// string cannot be changed i.e characters in strings cannot be changed 
// important point: Strings are immutable in JavaScript

let firstName = "ShirSHak";
console.log(firstName.length);

// Escape sequence has length of 1

// Srting In-Built Functions
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.slice(2, 5));//from 2nd index upto 4th index
console.log(firstName.replace("Shir", "shahi"));//replace is case sensitive

console.log("after concatination " + firstName.concat(" shahi"));

let secondName = "         HAHHAAHHAA         ";
console.log(secondName);
console.log(secondName.trim());

let test = "shirshak";
for (let i = 0; i < test.length; i++) {
    console.log(test[i]);
}
