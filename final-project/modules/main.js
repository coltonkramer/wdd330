import { addToLocalStorage, getFromLocalStorage } from './storage.js'

document.querySelector('#submit-button').addEventListener('click', () => {
    let zip = document.getElementById('zip-input').value;

    if(zip === ''){
        alert('Please enter your zipcode');
    } else {
        addToLocalStorage(zip);
        document.getElementById('zip-input').value = '';
        
}});

getFromLocalStorage();

document.getElementById("menu-close").addEventListener("click", toggleMenu);
document.getElementById("menu-open").addEventListener("click", toggleMenu);

function toggleMenu(){
    let updateElement = document.querySelector(".form-wrapper");
    updateElement.classList.toggle("open");
  }