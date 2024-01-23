// //primitive data types

// const name = "nika"; // String Types;
// const age = 21; // Number Types;
// const isAdmin = false; // Boolean Types;
// let guest; // Undefined Types;
// let nullVariables = null; // Null Types;

// //nonPrimitives Data Types

// const user = ["nika", 22, false, ["dsdsd", "dsdsd"], 22, "nika"]; // Array

// const user_obj = {
//   name: "nika",
//   age: 22,
//   sity: "Tbilisi",
//   address: {
//     location: "dsdsds",
//     city: "dsdsds",
//   },
// }; // Object

// const uniqueNum = new Set();
// uniqueNum.add(10);
// uniqueNum.add(123);
// uniqueNum.add("1043");

// console.log(uniqueNum);

// uniqueNum.has(123);
// uniqueNum.delete(123);
// console.log("update data", uniqueNum);

// uniqueNum.clear(123);

// console.log("update data", uniqueNum);

// let num1 = "10";
// let num2 = 20;

// let result = (2 + 2) * 4;
// let result = num1 / num2;
// console.log(typeof result);

// let num1 = 23;
// let num2 = 20;

// let isLogedin = true;

// if (isLogedin) {
//   console.log("ეს user დალოგინებულია!!");
// } else if (!isLogedin) {
//   console.log("ეს user არარის დალოგუნებული!");
// } else {
//   console.log("მომხმარებელი არარის ნაპოვნი!!");
// }

//თუ num1 > num2 და num1 < num2 მაში დამილოგოს რაღაც;

// let input = "-";

// switch (input) {
//   case "+":
//     console.log(10 + 10);
//     break;
//   case "-":
//     console.log(num - num);
//     break;
//   case "*":
//     console.log(num * num);
//     break;
//   default:
//     console.log("არცერთი ხილი არარის ნაპოვნი!!");
//     break;
// }

// 1) დაწერეთ კოდი სადაც შეამოწმებთ დადებითია თუ უარყოფითი ეს რიცხვი!!

//asnwer:

// let number = 0;
// if(number > 0){
//     console.log("positive number!!")
// }else if(number === 0){
//     console.log("equal number 0")
// }else{
//     console.log("negative number!!")
// }

//2)დაწერეთ მარტივი კალკულატორი სადაც გამოიყენებთ ოპერატორებს(+, -, \*, /)
// switch case დახმარებით უბრალოდ დარწმუნდით რომ თითოეულ ქეისი ასრულებს ამ მეთოდებს

// let operators = "+";
// switch (operators) {
//   case "+":
//     console.log(10 + 10);
//     break;
//   case "-":
//     console.log(10 - 10);
//     break;
//   case "*":
//     console.log(10 * 10);
//     break;
//   case "/":
//     console.log(10 / 10);
//     break;
//   default:
//     console.log("number is not defined!");
//     break;
// }

// let operators = "+";

// if (operators === "+") {
//   console.log(10 + 10);
// } else if (operators === "-") {
//   console.log(10 - 10);
// } else if (operators === "*") {
//   console.log(10 * 10);
// } else if (operators === "/") {
//   console.log(10 / 10);
// } else {
//   console.log("number is not defined!!");
// }

//4) დაწერეთ ავტორიზაციის ლოგიკა სადაც უნდა დავარეგისტრიროთ User
// user უნდა შემოყავდეს firstName,lastName,email,password,phoneNumber
// firstName,lastName,email,password არის სავალდებულო ველები
// ამიტომ ერთიანად შეამოწმეთ ეს ოთხი ველი და დარწმუნდით თუ ცარიელი input
// არარის მაშინ დალოგეთ რომ შენ დარეგისტრირდი წარმატებით თუ ცარიელია მაშინ
// დალოგეთ "input is required" გამოიყენეთ if else

let firstName = "Nika";
let lastName = "Munjishvili";
let email = "nika@gmail.com";
let password = "nika123456";
let phoneNumber = "+43043434343";

if (
  firstName !== "" &&
  lastName !== "" &&
  email !== "" &&
  password !== "" &&
  phoneNumber !== ""
) {
  console.log("succesfull registered!!");
} else if (phoneNumber === "") {
  console.log("phoneNumber is required");
} else {
  console.log("input is required");
}
