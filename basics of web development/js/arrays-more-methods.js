// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19];
// let num_even_more = [211, 212, 213, 214, 215, 216, 217, 218, 219];
// console.log(num);
// delete num[0];// this doesn't change the length of array
// console.log(num.toString());

// let newArray = num.concat(num_more, num_even_more);
// console.log(newArray);


// sort function changes the original array
// let num = [324, 432, 334, 344, 45, 634, 657, 88, 99];
// console.log(num);
// const compare = (a, b) => {
//     return a - b;// return b - a for descending order
// }
// num.sort(compare);
// console.log(num);

// num.reverse();
// console.log(num);

// splice and slice
// let num = [324, 432, 334, 344, 45, 634, 657, 88, 99];
// console.log(num);
// num.splice(2, 4, 45, 55, 65, 75, 85, 95, 105);// 2 is starting index and 4 is higher value upto where we have to delete and remaining numbers are the replaceable numbers
// console.log(num);


// slice note:it doesn't modify original array but creates new one
let num = [324, 432, 334, 344, 45, 634, 657, 88, 99];
console.log(num);
let newNum = num.slice(3,6);//starting and ending values given
console.log(newNum);