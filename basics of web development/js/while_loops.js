// while loops && entry controlled loop
let n = prompt("Enter value of n");
n = Number.parseInt(n);
let i = 1;
while (i < n) {
    console.log(n);
    ++i;
}

// do while loops -> runs atleast once && exit controlled loop
let number = prompt("Enter your number ");
do {
    console.log(i);
    ++i;
} while (i < number);