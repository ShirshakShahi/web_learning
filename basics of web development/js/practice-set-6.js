// QN NO 1

// let ask = prompt("Enter your age");
// ask = Number.parseInt(ask);
// if (ask < 18) {
//     alert("You are underaged,you cannot drive");
// }
// if (ask > 18 && ask < 50) {
//     alert("You can drive if you have license");
// }


// QN NO 2

// let choice = true;
// do {
//     let ask = prompt("Enter your age");
//     ask = Number.parseInt(ask);
//     if (ask < 18) {
//         alert("You are underaged,you cannot drive");
//     }
//     else if (ask > 18 && ask < 50) {
//         alert("You can drive if you have license");
//     }
//     choice = confirm("Do you want to see ptompt again? ");
// } while (choice != false);

// QN NO 3

let choice = true;
do {
    let ask = prompt("Enter your age");
    ask = Number.parseInt(ask);
    if (ask < 18 && ask > 0) {
        alert("You are underaged,you cannot drive");
    }
    else if (ask > 18 && ask < 50) {
        alert("You can drive if you have license");
    }
    else if (ask < 0) {
        console.error("You have to enter a valid value ");
    }
    choice = confirm("Do you want to see ptompt again? ");
} while (choice != false);

// qn 4
let num = prompt("enter a value");
num = Number.parseInt(num);
if (num > 4) {
    location.href = "https://facebook.com";
}