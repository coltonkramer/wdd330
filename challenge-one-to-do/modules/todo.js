import { addToLocalStorage, getFromLocalStorage } from './ls.js'

export let listContainer = document.getElementById("list-container");
export let list = [];

document.querySelector(".add-button").addEventListener("click", () => {
    let task = document.getElementById("form-input").value;
    if(task === ""){
        alert('Please add something to the list')
    } else {
        let item = {
            id: Date.now(),
            content: task,
            completed: false
        };
        
        list.push(item);
        addToLocalStorage(list);
        document.getElementById("form-input").value = "";
    }
});

 export function renderList(list) {
        listContainer.innerHTML = ``; 
        list.forEach(i => {
    let rowContainer = document.createElement("div");
    rowContainer.setAttribute('data-key', i.id); 
    rowContainer.setAttribute('class', 'item');
    rowContainer.innerHTML += `
      <input class="check-box" id="${i.id}" type='checkbox' ${i.completed ? 'checked' : null}>
        <label class="list-element" for="${i.id}">${i.content}</label>
        <button class="delete-button">X</button>
        `;
      listContainer.append(rowContainer)

    })
}

getFromLocalStorage();