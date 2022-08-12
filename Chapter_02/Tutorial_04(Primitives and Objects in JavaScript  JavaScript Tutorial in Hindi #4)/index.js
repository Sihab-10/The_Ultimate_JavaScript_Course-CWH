console.log(
  "primitive data types NNBBSSU and non-primitive data types: objects"
);
//Primitive data types in js
// N = Null
// N = Number
// B = Boolean
// B = bigInt
// S = Symbol
// S = String
// U = undefined

let a = null;
let b = 345;
let c = true;
let d = BigInt(547) + BigInt(3);
let e = Symbol("This is a symbol");
let f = "Sihab";
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof d); //for find out what type of this variable is

//Non-primitive data type - object in js
const item = {
  harry: true,
  sihab: false,
  sifat: 07,
  suha: undefined,
};
console.log(item["harry"]);
console.log(item["sihab"]);
console.log(item["sifat"]);
console.log(item["suha"]);
