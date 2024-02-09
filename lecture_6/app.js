// // class Car {
// //   constructor(model, year) {
// //     this.model = model;
// //     this.year = year;
// //   }

// //   sayMyCarName() {
// //     console.log(`This car is a ${this.year} ${this.model}`);
// //   }

// //   sayHello() {
// //     return "Hi!!";
// //   }
// // }

// // const my_car = new Car();
// // my_car.model = "Mazda";
// // my_car.year = "2017";
// // my_car.sayMyCarName();
// // my_car.sayHello();

// // console.log(my_car.sayHello());

// class Book {
//   constructor(author, title) {
//     this.author = author;
//     this.title = title;
//   }

//   sayBookInfo() {
//     return `The book "${this.title}" was written by ${this.author}.`;
//   }

//   updateBookInfo(author, title) {
//     this.author = author;
//     this.title = title;
//   }

// }

// const newBook = new Book();
// newBook.author = "შოთა რუსთაველი";
// newBook.title = "ვეფხისტყაოსანი";

// const firstResult = newBook.sayBookInfo();
// const secondResult = newBook.updateBookInfo("hello", 'sasasa');

// console.log(firstResult);
// console.log(secondResult);

// class User {
//   constructor(name, surname, age) {
//     this.name = name;
//     this.age = age;
//     this.surname = surname;
//   }

//   printName() {
//     const fullName = this.name + this.surname;
//     return fullName;
//   }

//   printNameLength(num) {
//     return this.name.length - num;
//   }

//   changeUser(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//   }
// }

// const nick = new User();
// nick.name = "nika";
// nick.age = 22;
// nick.surname = "munjishvili";

// console.log(nick);
// const result = nick.printName();
// const result2 = nick.printNameLength(2);
// const result3 = nick.changeUser("Saba", "Pachulia", 25);
// console.log(nick);
// console.log(result);
// console.log(result2);
// console.log(result3);

class User {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  sayFullName() {
    return `${this.name} ${this.lastName} and my age is ${this.age}`;
  }

  getNameLength() {
    return this.name.length;
  }

  countDownNumber(number) {
    return this.age + number;
  }

  updateUserObject(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
}

const user = new User();
user.name = "nika";
user.lastName = "munjishvili";
user.age = 22;

console.log(user);

user.updateUserObject("saba", "pachulia", 20);
const result2 = user.countDownNumber(10);
console.log(user);

console.log(result2);

// class Animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(this.sound);
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     console.log(`${this.name} says ${this.sound}`);
//   }
// }

// const dog = new Dog("Rex", "woof");
// dog.makeSound();

// class UserName {
//   constructor(hello, name) {
//     this.hello = hello;
//     this.name = name;
//   }

//   sayMyName() {
//     return false;
//   }
// }

// class wellcome extends UserName {
//     sayMyName(){
//         return `${this.hello} - ${this.name}`
//     }
// }

// const wellcomeUser = new wellcome("Hello", "John Doe");
// console.log(wellcomeUser.sayMyName());

// class Animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }

//   makeSound() {
//     return `${this.name} says ${this.sound}`;
//   }
// }

// class Animal2 extends Animal {
//     makeSound() {
//     return `${this.name} says ${this.sound}`;
//   }
// }

// const result = new Animal2("Rex", "Woof");
// console.log(result.makeSound());

// class animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }

//   makeSound() {
//     return `the cat ${this.name} will make sound : ${this.sound}`;
//   }
// }

// class cat extends animal {
//   makeSound() {
//     return `the cat ${this.name} will make sound : ${this.sound}`;
//   }
// }

// const result = new cat("Tom", "Meow");
// console.log(result.makeSound());

// fetch('api/user')
// .then(response => response) // --> //resolve
// .catch(err => err); //--> // reject


// Promise.allSettled();