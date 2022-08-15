//Chapter two practice set
//Use logical operator to find whether the age of a person lies between 10 and 20?
/*
let age = prompt("What is your age ?");
if (age > 10 && age < 20) {
  console.log("Your age is lies on between 10 and 20");
} else {
  console.log("Your age is not lies on between 10 and 20");
}
*/

//Demonstrate the use of switch case statement in javaScript
/*
const t = prompt("what is your plan for weekend?");
switch (t) {
  case "Sihab":
    console.log("Go for a small tour of Cox's bazar");
    break;
  case "Sifat":
    console.log("we are going to chennai for a small tour");
    break;
  case "Suha":
    console.log("I am not going anywhere because i am sick now");
    break;
}
*/

//Write a javaScript program to find whether number is divisible by 2 and 3
/*
const n = prompt("write any number:");
n = Number.parseInt(n);
if (n % 2 == 0 && n % 3 == 0) {
    console.log("Number is divisible by 2 and 3");
} else {
    console.log("Number doesn't divisible by 2 and 3");
}
*/

//Write a javaScript program to find whether number is divisible by either 2 or 3
/*

const num = prompt("write any number:");
num = Number.parseInt(num);
if (num % 2 == 0 || num % 3 == 0) {
  console.log("Number is divisible by 2 and 3");
} else {
  console.log("Number doesn't divisible by 2 and 3");
}

*/

//Print "You can drive" or "You can not drive" based on age being greater than 18 using ternary operator
let age = 19;
a = age < 18 ? "you can not drive" : "You can drive";
console.log(a);
