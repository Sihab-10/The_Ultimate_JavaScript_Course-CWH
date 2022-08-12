console.log("Operators in js");
//Arithmatic Operators
let a = 45;
let b = 4;
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a ** b = ", a ** b);
console.log("a % b = ", a % b);
console.log("a++ = ", a++);
console.log("a = ", a);
console.log("++a = ", ++a);
console.log("a-- = ", a--);
console.log("a = ", a);
console.log("--a = ", --a);
console.log("increment and decrement");
console.log("++a", ++a); //value of a = 46 & print of a = 46
console.log("a++", a++); //value of a = 47 & print of a = 46
console.log("--a", --a); //value of a = 46 & print of a = 46
console.log("a--", a--); //value of a = 45 & print of a = 46
console.log("a", a); //value of a = 45 & print of a = 45
console.log("a--", a--); //value of a = 44 & print of a = 45
console.log("--a", --a); //value of a = 43 & print of a = 43

//Assignment operators
let c = 5;
let d = 6;
let e = 3;
let g = 12;
let f = 4;
let h = 9;
c += 5; //same as a = a + 5
d -= 3; //same as d = d - 3
e *= 3; //same as e = e * 3
g /= 3; //same as g = g / 3
f **= 4; //same as f = f ** 4
h %= 2; // same as h = h % 2
console.log(c);
console.log(d);
console.log(e);
console.log(g);
console.log(f);
console.log(h);

//comparison operators
let com1 = 8;
let com2 = "8";
let com3 = 9;
console.log("com1==com2", com1 == com2);
console.log("com1!=com2", com1 != com2);
console.log("com1===com2", com1 === com2);
console.log("com1!==com2", com1 !== com2);
console.log("com1>com3", com1 > com3);
console.log("com1<com3", com1 < com3);

//logical operators
let x = 5;
let y = 6;
console.log(x < y && x == 5);
console.log(x > y || x == 5);
console.log(!false);
console.log(!True);
