// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("resolved after two seconds ");
//         resolve(56);
//     }, 2000)
// })
// console.log(p1);
// p1.then((value) => {
//     console.log(value);
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise 2");
//         }, 5000);
//     });
//     return p2;
// }).then((value) => {
//     console.log("this is finally done");
// });

// loadscript function 

const loadScript = (url) => {

    return new Promise((resolve, reject) => {

        let script = document.createElement('script');
        script.url = url;
        document.body.appendChild(script);
        script.onload = () => { resolve(1); }
        script.onerror = () => { reject(0); }
    })
}


let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");
p1.then((value) => {
    console.log(value);

}).catch((error) => {
    console.log("we are having a problem here");
})