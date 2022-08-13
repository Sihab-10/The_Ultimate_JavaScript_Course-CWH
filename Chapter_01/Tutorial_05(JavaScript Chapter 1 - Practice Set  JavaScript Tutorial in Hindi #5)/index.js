console.log("javaScript chapter 01 - practice test");

//Create a variable of type string and try to add a number to it?

let a = "sihab";
let b = 21;
c = a + b;
console.log(c);

//Use typeof operator to find the datatype of the string in last question

console.log(typeof c);

//Create a const object in javaScript can you change it to hold a number later?

const item = {
  number1: 01,
};
// item = 3; no we can't change it to hold any number
console.log(item["number1"]);

//Try to add a new key to the const object in problem 3 were you able to do it?

const item2 = {
  nam: "Sihab",
  age: 24,
  isPrinciple: false,
};
item2["friend"] = "Sifat";
item2["age"] = 34;
console.log(item2);

//Write a js program to create a word-meaning dictonary of 5 words.

const dict = {
  raid: "a surprise attack by a small force",
  bias: "an inclination of temperament or outlook",
  beauty: "a_beautiful_person_or_thing",
  yakka: "work, especially hard work.",
  veracious:
    "characterized by truthfulness; true, accurate, or honest in content.",
};
// console.log(dict["yakka"]);
console.log(dict.yakka);
