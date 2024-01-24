//es5
// function myName(name, age, address, isAdmin) {
//   if (!isAdmin) {
//     return `my name is ${name} and i'm ${age}, my address is ${address}`;
//   }
// }

// console.log(myName("nika", 22, "Gori", false));

// function callBackFoo(callBack) {
//   return callBack(10,10);
// }

// function callBackFunction(num1,num2) {
//   console.log(num1 + num2);
// }
// callBackFoo(callBackFunction);

// const input = [1, 2, 3, 4, 5, 6, [7, 8, [9, 10]], 11, 12];
// //result --> [1,2,3,4,5,6,7,8,9,10];

// function mapDataInput(data) {
//   let result = [];
//   for (const elements of data) {
//     if (Array.isArray(elements)) {
//       result = result.concat(mapDataInput(elements));
//     } else {
//       result.push(elements);
//     }
//   }
//   return result;
// }

// console.log(mapDataInput(input));

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const results = array1.concat(array2);
// console.log(results);

//n = 5;
//1*2*3*4*n

// function recursive(n) {
//   if (n < 0) {
//     return 0;
//   }

//   if (n === 1) {
//     return 1;
//   }

//   return recursive(n - 1) * n;
// }

// console.log(recursive(5));

// const input = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10], 11, 12];
//result --> [1,2,3,4,5,6,7,8,9,10];

// for(let i = 0;i < input.length; i++){
//     const newArray = input[i];
//     for(let j = 0; j < newArray.length; j++){
//         console.log(newArray[j]);
//     }
// }

// const names = 'nika';

// if(typeof names === "string"){
//     console.log("string")
// }else{
//     console.log("number")
// }

// const numbers = [1, 2, 4, 56, 5, 5, 76, 87, 87, 77];

// const result = numbers.reduce((sum, number) => {
//   return sum + number;
// }, 0);

// console.log(result);

// let students = [
//   { name: "Luka", age: 22, sallary: 50 },
//   { name: "George", age: 17, sallary: 150 },
//   { name: "Saba", age: 15, sallary: 1.5 },
//   { name: "David", age: 19, sallary: 0 },
//   { name: "Nick", age: 30, sallary: 76 },
//   { name: "Levani", age: 27, sallary: 89 },
//   { name: "Tedo", age: 12, sallary: 0 },
// ];

// let result = students.reduce(
//   (res, item) => {
//     if (item.sallary === 0) {
//       res.unemployed++;
//     }
//     if (item.age >= 18) {
//       res.adult++;
//     } else {
//       res.teen++;
//     }

//     return res;
//   },
//   { adult: 0, teen: 0, unemployed: 0 }
// );

// console.log(result);

//გვქონდეს products array რომელშიც გვექნება price და დავაჯამოთ ეს price!!

// const products = [
//   { name: "Laptop", price: 999.99, category: "Electronics" },
//   { name: "Coffee Maker", price: 49.99, category: "Kitchen Appliances" },
//   { name: "Running Shoes", price: 89.99, category: "Sportswear" },
//   { name: "Bluetooth Headphones", price: 199.99, category: "Electronics" },
//   { name: "Novel - 'The Great Gatsby'", price: 15.99, category: "Books" },
// ];

// const results = products.reduce((sum,price) => {
//     // console.log(price.price);
//     return sum + price.price;
// }, 0)

// console.log("results is --> ",results);

// const products = [
//   { name: "Laptop", price: 999.99, category: "Electronics" },
//   { name: "Coffee Maker", price: 49.99, category: "Books" },
//   { name: "Running Shoes", price: 89.99, category: "Books" },
//   { name: "Bluetooth Headphones", price: 199.99, category: "Electronics" },
//   { name: "Novel - 'The Great Gatsby'", price: 15.99, category: "Books" },
// ];

// const electronic = products.filter(
//   (category) => category.category === "Electronics"
// );

// const books = products.filter(item => item.category === "Books");

// if (electronic) {
//   console.log(`We have ${electronic.length} electronic devices.`);
// }
// if (books) {
//   console.log(`We have ${books.length} books product.`);
// }

// const products = [
//   { name: "Laptop", price: 999.99, category: "Electronics" },
//   { name: "Coffee Maker", price: 49.99, category: "Books" },
//   { name: "Running Shoes", price: 89.99, category: "Books" },
//   { name: "Bluetooth Headphones", price: 199.99, category: "Electronics" },
//   { name: "Novel - 'The Great Gatsby'", price: 15.99, category: "Books" },
// ];

// const result = products.map((item) => {
//   const { price, category, name } = item;

//   if(item.category === "Books"){
//     return `Item Name: ${name}, Category: ${category}, Price: $${price}`
//   }
// });

// console.log(result);