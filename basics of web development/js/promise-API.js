// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         resolve("value 1");
//     }, 1000)
// });


// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         resolve("value 2");
//     }, 2000)
// });


// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         resolve("this is the reason for the error you are getting inside this problem");
//     }, 3000)
// });

// p1.then((value) => {
//     console.log(value);
// })
// p2.then((value) => {
//     console.log(value);
// })
// p3.catch((error) => {
//     console.log(error);
// })

// let promise_All = Promise.all([p1, 2, p3]);
// promise_All.then((value) => {
//     console.log(value);
// })

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve("value 1");
    }, 1000)
});


let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve("value 2");
    }, 2000)
});


let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {

        reject(new Error("this is the reason for the error you are getting inside this problem"));
    }, 3000)
});

let promise_All = Promise.allSettled([p1, 2, p3]);
promise_All.then((value) => {
    console.log(value);
})