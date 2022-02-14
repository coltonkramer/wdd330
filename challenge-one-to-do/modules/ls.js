import { renderList } from './todo.js'


export function addToLocalStorage(list){

    localStorage.setItem("todo-item", JSON.stringify(list));
    renderList(list);
}
export function getFromLocalStorage(){
    let tasks = localStorage.getItem("todo-item");
    if (tasks) {
        let data = JSON.parse(tasks);
        renderList(data);
    }
}


