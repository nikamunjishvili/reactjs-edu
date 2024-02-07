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


// const task_input = document.getElementById("task_input");

// let todo_tasks = [];

// function saveTasksToLocalStorage() {
//   localStorage.setItem('tasks', JSON.stringify(todo_tasks));
// }

// function addTask(taskValue) {
//   if (taskValue && !todo_tasks.includes(taskValue)) {
//     todo_tasks.push(taskValue);
//     task_input.value = ""; 
//     saveTasksToLocalStorage(); 
//   } else {
//     return;
//   }

//   renderTasks();
// }

// function renderTasks() {
//   const tasks_container = document.querySelector(".tasks");
//   tasks_container.innerHTML = '';

//   todo_tasks.forEach((task) => {
//     const taskElement = document.createElement("div");
//     taskElement.style.display = "flex";

//     taskElement.innerHTML = `
//       <div style="display: flex">
//         <input type="checkbox" />
//         <li style="list-style: none">${task}</li>
//         <button class="delete">X</button>
//       </div>
//     `;

//     tasks_container.appendChild(taskElement);

//     const deleteButton = taskElement.querySelector(".delete");
//     deleteButton.addEventListener('click', () => {
//       todo_tasks = todo_tasks.filter(t => t !== task);
//       saveTasksToLocalStorage(); 
//       renderTasks(); 
//     });
//   });
// }

// function loadTasksFromLocalStorage() {
//   const storedTasks = JSON.parse(localStorage.getItem('tasks'));
//   if (storedTasks) {
//     todo_tasks = storedTasks;
//     renderTasks();
//   }
// }

// task_input.addEventListener("keypress", (event) => {
//   if (event.key === "Enter") {
//     const taskValue = task_input.value.trim();
//     if (taskValue === "") {
//       const error = document.getElementById("error");
//       error.style.color = "red";
//       error.style.fontSize = "10px";
//       error.style.display = "block";
//       error.textContent = "Please enter a valid task!";
//     } else {
//       addTask(taskValue);
//     }
//   }
// });

// Load tasks when the document is loaded
// document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);
