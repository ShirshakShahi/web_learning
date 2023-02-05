// intro to promises

let promise = new Promise(function (resolve, reject) {
    console.log("hello g i am promise");
    resolve(56);

})

console.log("Hello ");
setTimeout(function () {
    console.log("hello in 2 seconds");
}, 2000);
console.log("My name is Hello 3");
console.log(promise);