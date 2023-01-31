// important: ARRAYS are mutable but strings are immutable
let marks = [10, 20, 30, 40, true, "not present"];
console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
// console.log(marks[6]); this prints undefined because index 6 doesn't exist
console.log("The length of Array Marks is " + marks.length);
marks[6] = 9999;//adding new items to array
console.log(marks[6]);
marks[0] = 69;//updating value of array
console.log(marks[0]);
console.log(typeof marks);

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}