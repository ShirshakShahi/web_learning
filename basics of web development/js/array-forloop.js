let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let index = 0; index < num.length; index++) {
//     console.log(num[index]);
// }

// //for each loop in js  : used to operate something
// num.forEach((element) => {
//     console.log(element * element);
// })

// Array.from --> changes string into array
let shirshak = " shirshak shhai ";
let shahi = Array.from(shirshak);
console.log(shahi);
console.clear();

// for...of loop --> gives us elements
for (let index of num) {
    console.log(index);
}

// for...in loop --> gives us keys value 
for (let i in num) {
    console.log(i);// do num[i] to get elements
}

