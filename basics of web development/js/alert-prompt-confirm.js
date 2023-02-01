alert("Hello this is  alert and this msg will appear on the top of your browser");
let ask = prompt("This is promt and It is used to take input from the user", "9878");// it has default value of 9878
console.log(typeof ask);

let write = confirm("do you want to write in browser");
if (write) {
    document.write(ask);
}
