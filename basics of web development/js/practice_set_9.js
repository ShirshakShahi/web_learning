// qn no 1
// const loadScript = async (src) => {

//     return new Promise((resolve, reject) => {

//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = () => {
//             console.log("this script is running without any difficulty");
//             resolve(src);
//         }
//         document.head.append(script);
//     })

// }

// const main2 = async () => {
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");
//     console.log(a);

// }
// main2();


// QN no 3
// const A = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("This is rejected hahhahahha");
//         }, 3000)

//     })
// }

// let a = A();
// a.catch((error) => {
//     console.log(error);
// })

// QN NO LAST 

let p1 = async () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(10);
        }, 1000);

    })
}



let p2 = async () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("test resolve");
        }, 3000);

    })
}



let p3 = async () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(30);
        }, 2000);

    })
}

let run = async () => {



    console.time();
    // let a1 = await p1();
    // console.log(a1);
    // let a2 = await p2();
    // console.log(a2);
    // let a3 = await p3();
    // console.log(a3);

    let a1 = p1();

    let a2 = p2();

    let a3 = p3();

    let sss = Promise.all([a1, a2, a3]).then((values) => {
        console.log(values);
    });


    console.timeEnd();




}


