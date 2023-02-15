// const start = () => {
//     const start1 = () => {

//         return new Promise((resolve, reject) => {

//             setTimeout(() => {
//                 resolve("Initializing Network...");

//             }, 1000)

//         }).then((value) => {
//             console.log(value);
//         })
//     }

//     const start2 = () => {

//         return new Promise((resolve, reject) => {

//             setTimeout(() => {
//                 console.log("Connecting to service...");
//             }, 2000)

//         }).then((value) => {
//             console.log(value);
//         })
//     }

//     const start3 = () => {

//         return new Promise((resolve, reject) => {

//             setTimeout(() => {
//                 console.log("Retreiving username...");
//             }, 3000)

//         }).then((value) => {
//             console.log(value);
//         })
//     }

//     const start4 = () => {

//         return new Promise((resolve, reject) => {

//             setTimeout(() => {
//                 console.log("Username found....");
//             }, 4000)

//         }).then((value) => {
//             console.log(value);
//         })
//     }

//     const start5 = () => {

//         return new Promise((resolve, reject) => {

//             setTimeout(() => {
//                 console.log("Trying a combination of 4.5 Trillion passwords...");
//             }, 5000)

//         }).then((value) => {
//             console.log(value);
//         })
//     }

//     const start6 = () => {

//         return new Promise((resolve, reject) => {


//             setTimeout(() => {
//                 console.log("Password found...");
//             }, 6000)

//         }).then((value) => {
//             console.log(value);
//         })
//     }

//     const start7 = () => {

//         return new Promise((resolve, reject) => {

//             setTimeout(() => {
//                 resolve("Connecting to facebook...");

//             }, 7000)

//         }).then((value) => {
//             console.log(value);
//         })
//     }

//      start1();
//      start2();
//      start3();
//      start4();
//      start5();
//      start6();
//      start7();

// }
// start();

let array = ["Initializing Hacking Tool",
    "Connecting to the server...",
    "Retrieving Username...",
    "Username found...",
    "Test for password...",
    "Password Not Found...",
    "Trying Again...",
    "Password  Found..."
]


const setSleep = (inSeconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, (inSeconds * 1000));

    })
}


const showHack = async (message) => {
    await setSleep(2);
    console.log(message);

}
(async () => {
    for (let index = 0; index < array.length - 1; index++) {
        await showHack(array[index]);
    }
})();
