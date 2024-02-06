// console.log("First Line Code!!");

// const secondFoo = () => {
//   console.log("Second Function!!");
// };

// const firstFoo = () => {
//   setTimeout(
//     () => {
//     console.log("First function!");
//   },
//   500);

//   secondFoo();

//   setTimeout(() => {
//     console.log("The end!!");
//   }, 700);
// };

// firstFoo();

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(Error("User Not Found!!"));
//       resolve({
//         data: {
//           id: 1,
//           name: "John Doe",
//           age: 22,
//           isMarried: false,
//         },
//       });
//     }, 3000);
//   });
// };

// fetchData()
//   //წარმატებული კოდი
//   .then(console.log)
//   // წარუმატებელი ფუნქცია
//   .catch((err) => {
//     console.log("Error Message!!", err);
//   });

// fetch().then;

// async function getData() {
//   await fetch("/api/user")
//     .then((response) => {
//       response.json();
//     })
//     .then(data => {
//         console.log(data.name);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// const fetchUserData = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((item) => {
//         const container = document.createElement("div");
//         const main_container = document.querySelector("main");
//         main_container.appendChild(container);

//         container.innerHTML = `
//        <table>
//        <tr>
//        <th>name</th>
//        <th>username</th>
//        <th>email</th>
//        </tr>

//        <tr>
//        <td>${item.name}</td>
//        <td>${item.username}</td>
//        <td>${item.email}</td>
//        </tr>
//        </table>
//        `;

//         const table = document.querySelector("table");
//         const th = document.querySelector("th");
//         const td = document.querySelector("td");

//         table.style.border = "2px solid red";
//         td.style.border = "2px solid red";
//         th.style.border = "2px solid red";
//       });
//     })
//     .catch((err) => {
//       alert("Error Message", err);
//     });
// };

// fetchUserData();

// const json = [
//     {
//         id: 1,
//         name: "George"
//     }
// ]

// const jsonData = JSON.stringify(json)
// console.log(jsonData);

// const result = JSON.parse(jsonData);
// console.log(result.forEach(item => item.name));

// const button = document.querySelectorAll("#button");

// button.forEach((button_item) => {
//   button_item.addEventListener("click", () => {
//     const post_id = button_item.textContent;
//     fetch(
//       `https://jsonplaceholder.typicode.com/posts/${post_id}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         const data_container = document.createElement("div");
//         data_container.innerHTML = `Post ID: ${data.id} - POST: ${data.title}`;
//         document.body.appendChild(data_container);
//       });
//   });
// });

// const button = document.querySelector("#button");

// button.addEventListener("click", () => {
//  const postData =  fetch(`https://jsonplaceholder.typicode.com/posts`, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({
//       hello: "Hello",
//     }),
//   });

//   postData.then(res => res.json())
//   .then(data => {
//     console.log(data);
//   })
// });
