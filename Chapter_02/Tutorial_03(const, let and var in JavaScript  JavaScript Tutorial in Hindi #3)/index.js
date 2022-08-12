// const, let and var in javaScript
console.log("JavaScript tutorial 3: var, let and const");
// var a = 45;
// var c = null;
// var d = undefined;

// var b = "harry";
// {
//   var b = "this";
//   console.log(b);
// }
// console.log(b);

// same example with using let keyword

// let b = "harry";
// {
//   let b = "this";
//   console.log(b);
// }
// console.log(b);

//this is why let is called block scoped variable/identifier

//--------------var can be update and redeclared within is scoped----------
// var a = 23;
// var p = "hello";
// console.log(a);

//---------------let can be updated but no redeclared----------------
// let a = 45;
// a = 56;
// console.log(a); //here a is updated
// let a = 35; redeclared is not allowed in let keyword

//---------------const can neither be updated nor be redeclared-------------

const author = "sihab";
// const author = 3.14; // const can not be redeclared
// author = "harry";// const can not be updated
console.log(author);
