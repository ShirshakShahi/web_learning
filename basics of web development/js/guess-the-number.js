let min = 1;
let max = 100;
let chance = 0;
const random =
    Math.floor(Math.random() * (+max - +min)) + +min;
// console.log("Random Number Generated : " + random);
let ask;
do {

    ++chance;
    ask = prompt("Guess the number ");
    ask = Number.parseInt(ask);
    if (ask < random) {
        alert("higher than this number");
    }
    else if (ask > random) {
        alert("lower than this number");
    }
    else if (ask == null) {
        alert("please enter atleast a number");
    }
    else {
        alert("Congratulations! you have entered the correct number in " + chance + " guesses");
    }
} while (ask != random);