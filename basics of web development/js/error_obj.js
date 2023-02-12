//  error msg and error

try {
    throw new Error("shirshak shahi")
}

catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
