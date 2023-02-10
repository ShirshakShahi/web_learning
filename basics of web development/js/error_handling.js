setTimeout(() => {
    console.log("hahahahah 1 2 3 4 5");
}, 1000);


setTimeout(() => {
    console.log("hahahahah 5 6 7 8 9");
}, 2000);


// try and catch only works as synchronous

try {
    console.log(shirshak);
}
catch (error) {
    console.log("bhosdike" + error);
}


setTimeout(() => {
    console.log("hahahahah 5 6 7 8 9");
}, 4000);
