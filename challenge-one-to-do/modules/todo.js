const listContainer = document.getElementById("list-container");
let list = [];
window.onload = getFromLocalStorage();

document.querySelector(".add-button").addEventListener("click", () => {
    let task = document.getElementById("form-input").value;
    if(task === ""){
        alert('Please add something to the list')
    } else {
        const item = {
            id: Date.now(),
            content: task,
            completed: false
        };
        
        list.push(item);
        addToLocalStorage(list);
        document.getElementById("form-input").value = "";
    }
});

function addToLocalStorage(list){
    let updatedList = JSON.stringify(list);
    localStorage.setItem("todo-item", updatedList);
    renderList(list);
}
function getFromLocalStorage(){
    let tasks = window.localStorage.getItem("todo-item");
    if (tasks) {
        let data = JSON.parse(tasks);
        renderList(data);
    }
}

function renderList(list) {
    // if (tasks === null) {
    //     console.log('%c Oh my heavens! ', 'background: #222; color: #bada55')
    // } else {
        listContainer.innerHTML = ``; 
        list.forEach(i => {
    const rowContainer = document.createElement("div");
    rowContainer.setAttribute('data-key', i.id); 
    rowContainer.setAttribute('class', 'item');
    rowContainer.innerHTML = `
      <input class="check-box" id="${i.id}" type='checkbox' ${i.completed ? 'checked' : null}>
        <label class="list-element" for="${i.id}">${i.content}</label>
        <button class="delete-button">X</button>
        `;
      listContainer.append(rowContainer)

    })
//   }
}
function checked(id){
    list.forEach(i => {
        if (i.id == id){
            i.completed = !i.completed
        }
    });
    addToLocalStorage(list);

}