// // // const firtPromise = new Promise((resolve, reject) => {
// // //   setTimeout(() => {
// // //     resolve("User Data");
// // //   }, 3000);
// // // });

// // // const secondPromise = new Promise((resolve, reject) => {
// // //   setTimeout(() => {
// // //     resolve("Activity Logs");
// // //   }, 2000);
// // // });

// // // Promise.race([firtPromise, secondPromise])
// // //   .then((res) => {
// // //     console.log("result --> ", res);
// // //   })
// // //   .catch((err) => {
// // //     console.error("Error: ", err);
// // //   });

// // const firstPromise = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve('User Data');
// //     }, 1000);
// // })

// // const secondPromise = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve('Account Statistics');
// //     }, 2000);
// // })

// // const thirdPromise = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve('Activity Logs')
// //     }, 3000);
// // })

// // Promise.all([firstPromise, secondPromise, thirdPromise])
// //     .then((res) => {
// //         console.log("result -->", res);
// //     })
// //     .catch((err) => {
// //         console.error("Error: ", err);
// //     });

// function getUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('User Data');
//         }, 1000);
//     })
// }

// function getAccountStatistics() {
//    return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Account Statistics');
//         }, 2000);
//     })
// }

// function getActivityLogs() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Activity Logs')
//         }, 3000);
//     })
// }

// Promise.all([getUserData(), getAccountStatistics(), getActivityLogs()])
//     .then((res) => {
//         console.log("result -->", res);
//     })
//     .catch((err) => {
//         console.error("Error: ", err);
//     });

// function myFunction() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("image-1");
//     }, 2000);
//   });
// }

// function myFunction1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("image-2");
//     }, 3000);
//   });
// }

// Promise.any([myFunction(), myFunction1()])
//   .then((res) => {
//     console.log("result -->", res);
//   })
//   .catch((err) => {
//     console.error("Error: ", err);
//   });

// const getUserData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("User Data");
//     }, 3000);
//   });
// };

// const getAccountStatistics = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Account Stats");
//     }, 3000);
//   });
// };

// const getActivityLogs = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Activity Log");
//     }, 5000);
//   });
// };

// Promise.all([getUserData(), getAccountStatistics(), getActivityLogs()])
//   .then((results) => {
//     console.log("result-->", results);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// const getUserData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("User Data");
//     }, 3000);
//   });
// };

// const getAccountStatistics = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Account Stats");
//     }, 3000);
//   });
// };

// const getActivityLogs = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Activity Log");
//     }, 5000);
//   });
// };

// Promise.all([getUserData(), getAccountStatistics(), getActivityLogs()])
//   .then((resolve) => {
//     console.log("result -->", resolve);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

const task_input = document.getElementById("task_input");

let todo_tasks = [];

function addTask() {
  todo_tasks.push(task_input.value);
  localStorage.setItem("tasks", task_input.value);
  const getTodoTasksItem = localStorage.getItem("tasks");
  console.log(todo_tasks);

  todo_tasks.forEach(() => {
    const ul = document.createElement("ul");
    const tasks_container = document.querySelector(".tasks");
    tasks_container.appendChild(ul);
    ul.innerHTML = `
    <div style="display: flex">
    <input type="checkbox" />
    <li style="list-style: none">${getTodoTasksItem}</li>
    <button>X</button>
    </div>
    `;
    task_input.value = "";
  });
}

task_input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (task_input.value === "") {
      const error = document.getElementById("error");
      error.style.color = "red";
      error.style.fontSize = "10px";
      error.style.display = "block";
      error.textContent = "Please enter a valid task!";
    } else {
      addTask();
    }
  }
});

const button = document.querySelector(".button");
const popup = document.querySelector(".popup");
const close_popup = document.querySelector(".close_popup");
const change_mode_btn = document.getElementById("toggle");

change_mode_btn.addEventListener("click", () => {
  if (change_mode_btn.textContent === "dark") {
    change_mode_btn.textContent = "light";
  } else {
    change_mode_btn.textContent = "dark";
  }
  document.body.classList.toggle("dark-mode");
});

button.addEventListener("click", () => {
  if (popup.style.display === "none") {
    popup.style.display = "block";
  } else {
    popup.style.display = "block";
  }
});

close_popup.addEventListener("click", () => {
  popup.style.display = "none";
});

const check = document.getElementById("check");
const heading = document.getElementById("heading");


check.addEventListener("click", () => {
  if (check.checked) {
    heading.style.textDecoration = "line-through";
    heading.style.color = 'gray'
  }else{
    heading.style.textDecoration = "none";
    heading.style.color = 'black'
  }
  
})
