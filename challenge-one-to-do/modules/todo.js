const listContainer = document.getElementById("list-container");
const rowContainer = document.createElement("div");
window.onload = loadTasks();
let list = [];

function getDate() {
  return Date.now();
}

document.querySelector(".add-button").addEventListener("click", () => {
  let task = document.getElementById("form-input").value;
  const item = {
    id: getDate(),
    content: task,
    completed: false,
  };
  list.push(item);
  console.log(list)
  let updatedList = JSON.stringify(list);
  localStorage.setItem("todo-item", updatedList);
  document.getElementById("form-input").value = "";
  loadTasks();
});

function loadTasks() {
  let tasks = window.localStorage.getItem("todo-item");
  let data = JSON.parse(tasks);

  data.forEach(i => {
      
      rowContainer.innerHTML = `
      <input class="check-box" id="${i.id}" type='checkbox' ${
          i.completed ? "checked" : ""
        }>
        <label class="list-element" for="${i.id}">${i.content}</label>
        <button class="delete-button" id="delete${
            i.id
        }" onclick="return this.parentNode.remove();">X</button>
        `;
        listContainer.append(rowContainer);
        
        console.log(data);
    });
}

// // import { newRow } from "./utilities.js";
// import { storage } from "./ls.js";
// // grabs the large container already in the DOM
// let listContainer = document.getElementById("list-container");

//     storage.forEach((i) => {
//       let id = i["id"];
//       let content = i["content"];
//       let completed = i["completed"];

//       if (completed) {
//         document.getElementById(id).checked = true;
//       }

//     });

//     //adding and removing things to the array
