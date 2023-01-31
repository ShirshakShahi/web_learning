let num = [1, 2, 3, 4, 5, 69];
console.log(num);
console.log(typeof num);
let b = num.toString();
console.log(b);
let c = num.join("_haahaha_");
console.log(c);
console.log(typeof c);
let r = num.pop();//pop returns the popped elementF
console.log(num, r);
let s = num.push(99999999);//push returns the new array length
console.log(num, s);
let t = num.shift();// shift also removes array element but from beginning
console.log(t, num);

