
// switch case in java script
let flag = 1;
do {
    let firstNumber = prompt("Enter the value of Number ?");
    switch (firstNumber) {
        case '1': alert("The number is 1");
            break;
        case '2': alert("The number is 2");
            break;
        case '3': alert("The number is 3");
            break;
        case '4': alert("The number is 4");
            break;
        case 'exit': console.log("we are exiting this program now");
            flag = 0;
            break;
        case 'shirshak': console.log("we are inside the string part of program now");
            break;
        default: alert("bro just choose number between 1 and 4");
    }
} while (flag);
