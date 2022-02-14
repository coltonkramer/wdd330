import { addToLocalStorage } from './ls.js'
import { list, listContainer } from './todo.js'

listContainer.addEventListener('click', function(event) {
    
    if (event.target.type === 'checkbox') {
      checked(event.target.parentElement.getAttribute('data-key'));
    }
    if (event.target.classList.contains('delete-button')) {
        let dataKey = event.target.parentElement.getAttribute('data-key')
      deleteList(dataKey);
    }
  });

export function checked(id){
    list.forEach(i => {
        if (i.id == id){
            i.completed = !i.completed
        }
    });
    addToLocalStorage(list);
}
export function deleteList(id) {
    console.log(id)
    console.log(list)
  let newList = list.filter(function(i) {
    return i.id != id;
  });
  addToLocalStorage(newList);
}