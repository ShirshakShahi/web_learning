// NN BB SS U
let a = null;
let b = 555;
let c = true;
let d = BigInt("645654");
let e = "Shirshak Shahi";
let f = Symbol("this is symbol");
let g = undefined;
let h;// this is too undefined
console.log(a, b, c, d, e, f, g, h);
console.log(typeof d);
console.log(typeof g);
console.log(typeof h);
h = "shirshak shahi";
console.log(typeof h);

// objects in Js --> non primitive data type
const item = {
    "shirshak": true,
    "shahi": false,
    "somash": 56,
    "bijay": undefined
}
console.log(item.shahi);
