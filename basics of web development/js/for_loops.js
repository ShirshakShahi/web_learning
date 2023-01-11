// for loop
let sum = 0;
let n = prompt("enter the vale of n");
n = Number.parseInt(n);

for (let i = 1; i < n; ++i) {
    sum += i;
}
console.log(sum);

//factorial using for loop
let fact = 1;
let number = 5;
for (let i = 1; i < number; i++) {
    fact = fact * i;
}

// for in loop
let obj = {
    shirshak: 50,
    shahi: 45,
    thakuri: 30
}
for (let a in obj) {
    console.log(a);
    console.log(obj[a]);
}

// for of loop

for(let b of "Shirshak"){
    console.log(b);
}