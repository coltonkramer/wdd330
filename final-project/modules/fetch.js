import { addWeather } from './dom.js'


export async function fetchCity(zipcode){
    const urlCity = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},US&appid=953336065a7c8c590044bd8c972cc6b6`;
    try{
        const response = await fetch(urlCity);
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        const json = await response.json();
        let lat = json.lat;
        let lon = json.lon;
        let place = json.name + ', ' + json.country;
        const urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=953336065a7c8c590044bd8c972cc6b6`;
        fetchWeather(urlWeather, place);
        
    }
    catch(error){
        console.error(`Could not get weather info ${error}`)
    }
}

async function fetchWeather(urlWeather, place){
    try{

        const response = await fetch(urlWeather);
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        const forecast = await response.json();
        addWeather(forecast, place);
        
    }
    catch(error){
        console.error(`Could not get weather info ${error}`)
    }
}