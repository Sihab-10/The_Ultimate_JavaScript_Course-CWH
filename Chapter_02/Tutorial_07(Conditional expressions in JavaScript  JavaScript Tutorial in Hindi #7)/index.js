// let a = prompt("hey whats your age:");
// a = Number.parseInt(a); //converting the string to number
// // console.log(typeof a);
// if (a < 0) {
//   alert("your age is invalid");
// } else if (a < 9) {
//   alert("you are now kid and you cannot think of driving");
// } else if (a < 18 && a >= 9) {
//   alert("you are now kid and you cannot think of driving");
// } else {
//   alert("your age is upto 18 so you can drive now");
// }
// console.log("you can", a < 18 ? "not drive" : "drive");
//Howework - Explore switch statement and write a basic program in the comments
const b = prompt("hey whats your plan or thinking about javaScript course?");
switch (b) {
  case "Sihab":
    console.log("My plan in to finish Ultimate javaScript course of CWH");
    break;
  case "Harry":
    console.log(
      "My aim is to upload the complete course with good projects in youtube "
    );
    break;
  case "Students":
    console.log("We are happy to find a amazing teacher like Harry");
    break;
}
