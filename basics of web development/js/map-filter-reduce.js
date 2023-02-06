// map in array
let arrays = [12, 564, 1554, 74, 85];

// map creates a new array
let newArray = arrays.map((element, index, arrays) => {
    console.log(element, index, arrays);
    return element + 1;

});
console.log(newArray);

// Array filter : does filter operation 
let array_2 = [12, 151, 54, 2, 13, 13, 21];
let a2 = array_2.filter((a) => {
    return a < 50;
})
console.log(a2);

// reduce method : reduce gives us values/elements
let arr3 = [1, 2, 3, 4, 5];
let hi = arr3.reduce((s, h,) => {
    return s + h;
})
console.log(hi);



// Self practice
let arr = [12, 456, 84, 12, 3486, 4, 165, 1, 5, 684, 64, 984];
// console.log(arr);
// let newArr = arr.map((values) => {
//     return values + 1;
// })
// console.log(newArr);

// arr.forEach((values) => {
//     console.log(values + values);
// })

let myFunction = (values) => {
    return values < 500;
}
let filtered_values = arr.filter(myFunction);
console.log(filtered_values);