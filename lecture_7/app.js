// const search_username = document.getElementById("search_username");
// const search_button = document.getElementById("search_button");
// const dark_mode = document.getElementById("dark_mode");

// dark_mode.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
//   if (dark_mode.textContent === "dark") {
//     dark_mode.textContent = "light";
//   } else {
//     dark_mode.textContent = "dark";
//   }
// });

// search_button.addEventListener("click", () => {
//   const input_value = search_username.value;

//   try {
//     fetch(`https://api.github.com/users/${input_value}`)
//       .then((response) => response.json())
//       .then((data) => {
//         const content_container = document.createElement("div");
//         document.getElementById("isLoading").innerHTML = `
//         <span class="loader"></span>
//         `;
//         content_container.innerHTML = `
//         <div>
//         <img src=${data.avatar_url} style="width: 100px; height: 100px; border-radius: 50%"  />
//         <h1>${data.name}</h1>
//         <h4>${data.bio}</h4>
//         <span>${data.location}</span>
//         </div>
//         `;
//         document.body.appendChild(content_container);
//       });
//   } catch (error) {
//     alert("error", error);
//   }
// });

// import { Box } from "./styles/box.style.js";

// Box(
//   "100px",
//   "100px",
//   "red",
//   "20px",
//   "https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
// );
// Box(
//   "200px",
//   "200px",
//   "blue",
//   "20px",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
// );
// Box(
//   "300px",
//   "300px",
//   "green",
//   "20px",
//   "https://cdn-icons-png.flaticon.com/512/25/25231.png"
// );

// const signin = document.getElementById("signin");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const landing_page = document.querySelector(".second_container");
// const form = document.querySelector("form");

// signin.addEventListener("click", (event) => {
//   event.preventDefault();
//   let user_data = [];
//   const email_value = email.value;
//   const password_value = password.value;

//   if (email_value === "" && password_value === "") {
//     alert("Please Enter something...");
//   } else {
//     landing_page.style.display = "block";
//     form.style.display = "none";
//     user_data.push(email_value, password_value);
//     localStorage.setItem("data", JSON.stringify(user_data));
//     const get_user = localStorage.getItem("data");
//     const parse_data = JSON.parse(get_user);

//     parse_data.forEach((item) => {
//       landing_page.innerHTML = `Data: ${item}`;
//     });
//   }
// });

// const numbers = [1, 24, 35, 3, 2, 32, 434, 545, 332, 53, 4];

// const result = numbers.sort();
// console.log(result);

// function sortMyArray(elements) {
//   const sordetArray = elements.sort();
//   return sordetArray;
// }

// console.log(sortMyArray(numbers));

const numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  [8, 9, [10, 11, [232, 3232, [323, 32333]]]],
  12,
  13,
];
//result = [1,2,3,4,5,6,7,8,9,10,11]

// function recursiveData(elements) {
//   let new_array = [];

//   for (const element of elements) {
//     if (Array.isArray(element)) {
//       new_array = new_array.concat(recursiveData(element));
//     } else {
//       new_array.push(element);
//     }
//   }
//   return new_array;
// }

// console.log(recursiveData(numbers));

// n = 5;

// 1 * 2 * 3 * 4 * n

function recursiveFunction(n) {
  if (n === 0) {
    return 0;
  }
  
  if (n === 1) {
    return 1;
  }

  return recursiveFunction(n - 1) * n;
}

console.log(recursiveFunction(10));
