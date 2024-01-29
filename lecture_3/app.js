const products = [
  {
    id: 1,
    title: "Product A",
    price: 9.99,
    category: "Clothing",
  },
  {
    id: 2,
    title: "Product B",
    price: 19.99,
    category: "Books",
  },
  {
    id: 3,
    title: "Product C",
    price: 29.99,
    category: "Clothing",
  },
  {
    id: 4,
    title: "Product C",
    price: 29.99,
    category: "Books",
  },
];

// function myData(products_data) {
//   return products_data.map((product) => {
//     return {
//       ...product,
//       isCart: false,
//       creatAt:  new Date(),
//     };
//   });
// }

// console.log(myData(products));

const bookProducts = products.filter((product) => product.category === "Books");
const clothingProducts = products.filter(
  (product) => product.category === "Clothing"
);

// console.log(bookProducts);
// console.log(clothingProducts);

// const newProductsObj = {
//   book: bookProducts,
//   clothing: clothingProducts,
// };

// console.log(newProductsObj);

// for (const products in newProductsObj) {
//   const app = document.getElementById("app");
//   const ul = document.createElement("ul");
//   app.appendChild(ul);
//   ul.textContent = products.toUpperCase();

//   const list = document.createElement("li");

//   newProductsObj[products].forEach((item) => {
//     list.textContent = `${item.title} - ${item.price}`;
//     ul.appendChild(list);
//   });
// }

// const input = document.getElementById("input");
// const add_task = document.getElementById("Add_Todo");
// const error = document.getElementById("error");

// let tasks = [];
// add_task.addEventListener("click", () => {
//   if (input.value === "") {
//     error.style.color = "red";
//     error.style.display = "block";
//     error.innerHTML = "<h3>Plz write something...</h3>";
//   } else {
//     tasks.push(input.value);

//     const Ul_Container = document.getElementById("ul");
//     const lists = document.createElement("li");
//     Ul_Container.appendChild(lists);

//     tasks.forEach((task) => {
//       lists.innerHTML = `
//       <div style="display: flex; gap: 20px">
//       <li>${task}</li>
//       <button style="background-color: red">X</button>
//       </div>
//       `;
//     });

//     input.value = "";
//   }
// });

// window.document.addEventListener("keydown", (event) => {
//     if(event.keyCode === "Enter"){
//         console.log("Enter hello")
//     }
// })

function updateProductCategory(productId, newCategory) {
  return products.map((product) => {
    if (product.id === productId) {
      return { ...product, category: newCategory };
    } else {
      return product;
    }
  });
}

const updatedProducts = updateProductCategory(2, "Electronics");
// console.log(updatedProducts);

function data_update(productId, categoryElement) {
  return products.map((item) => {
    if (item.id === productId) {
      return { ...item, category: categoryElement, isCart: false };
    } else {
      return item;
    }
  });
}

const newDataUpdate = data_update(3, "Electronics");
// console.log(newDataUpdate);

// const input = document.getElementById("input");

// input.addEventListener("keypress", (event) => {
//     if(event.key === "Enter"){
//         document.body.innerHTML = "<h1>hello World!!</h1>";
//     }
// })

// const array1 = [1, 2, 3];
// const array2 = [4, 5, "nikas"];

// const email = 'nikagmail.com';

// if (email.includes("@")) {
//     // do something
//     console.log('Valid Email');
// } else {
//   console.log("Invalid Email");
// }

// const result = array1.concat(array2);
// console.log(result);

// array.push(2);

// console.log('update array',array);s

function myName() {
    return "Hello"
}

myName(console.log)

console.table('eds',"dsds","dsds");