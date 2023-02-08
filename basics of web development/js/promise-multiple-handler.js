// this is different from promise chaining

let p1 = new Promise((resolve, reject) => {
    alert("hey i amnot resolved");
    setTimeout(() => {
        resolve(1);

    }, 5000)
})
p1.then(() => {
    console.log("hey this is after resolved");
})

p1.then(() => {
    console.log("hurray");
})