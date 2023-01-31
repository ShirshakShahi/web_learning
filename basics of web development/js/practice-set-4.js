// QN NO 1
console.log("shirshak\"".length);

// QN 2 
const sentence = "This is a random sentence to check whether this contains the given word or not";
const word = "check";
console.log(sentence.includes(word));
console.log(sentence.startsWith("This"));
console.log(word.startsWith("h"));
console.log(sentence.endsWith("not"));

// QN 3 
const test = "HI MY NAME IS WHAT MY NAME IS WHO";
console.log(test.toLowerCase());

// QN 4
const test_2 = "Please give Rs 1000";
console.log(test_2.length);
let amount = test_2.slice("Please give Rs ".length);
console.log("The amount of the given string is " + amount);

// QN 5
const test_3 = "Shirshak";
test_3[3] = "SSS";
console.log(test_3);//cannot change because string is immutable