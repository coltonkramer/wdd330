import { fetchCity } from './fetch.js'

//Saves the zipcode to local storage
export function addToLocalStorage(zip){

    localStorage.setItem("zipcode", JSON.stringify(zip));
    fetchCity(zip);
}

//Retrieves the data from local storage and calls the fetch function
export function getFromLocalStorage(){
    
    let zip = localStorage.getItem("zipcode");
    if (zip) {
        let data = JSON.parse(zip);
        fetchCity(data);
    }
}