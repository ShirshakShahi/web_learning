let a = prompt("Hey whats your age?");
console.log(typeof a);// this gives string
a = Number.parseInt(a);//type casting to convert string into number
console.log(typeof a);
if (a <= 0) {
    alert("Invalid age");
} else if (a > 0 && a < 18) {
    alert("Bro is just a kid");
} else if (a < 55) {
    alert("you can drink as much as you want ");
}
else {
    alert("Take care of your health");
}
