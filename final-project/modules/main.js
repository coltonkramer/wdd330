// const url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&units=imperial&appid=953336065a7c8c590044bd8c972cc6b6';
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
