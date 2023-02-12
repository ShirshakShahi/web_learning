// finally will run irrespective of the previous code 
try {
    // console.log(ashish); // -->even if i uncomment this statement, finallt will run eventually
    console.log("hello this is test code");
}
catch (error) {
    console.log("This is inside error box \n" + error);
}
finally {
    console.log("this will run without any test atleast one time");
}