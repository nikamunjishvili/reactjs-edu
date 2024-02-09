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

import { Box } from "./styles/box.style.js";

Box(
  "100px",
  "100px",
  "red",
  "20px",
  "https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
);
Box(
  "200px",
  "200px",
  "blue",
  "20px",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
);
Box(
  "300px",
  "300px",
  "green",
  "20px",
  "https://cdn-icons-png.flaticon.com/512/25/25231.png"
);
