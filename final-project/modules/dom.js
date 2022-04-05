import { getWindDirection, getIcon, getUpdate } from './utilities.js'

export function addWeather(forecast, place){
    //Get the city and country
    const location = document.getElementById('location');
    //Information needed for the forcast today
    const todayCurrent = document.getElementById('today-current');
    const todayFeelsLike = document.getElementById('today-feels-like');
    const todayWindSpeed = document.getElementById('today-wind-speed');
    const todayWindDirection = document.getElementById('today-wind-direction');
    const todayWeather = document.getElementById('today-weather');
    const todayIcon = document.getElementById('today-icon');
    
    
    location.textContent = place;
    todayCurrent.textContent = forecast.current.temp;
    todayFeelsLike.textContent = forecast.current.feels_like;
    todayWindSpeed.textContent = forecast.current.wind_speed;
    const windDirectionToday = forecast.current.wind_deg;
    todayWindDirection.textContent = getWindDirection(windDirectionToday);
    todayWeather.textContent = forecast.current.weather[0].main;
    todayIcon.setAttribute('src', getIcon(forecast.current.weather[0].icon));
    todayIcon.setAttribute('alt', forecast.current.weather[0].description);


    //Information needed for the forcast tomorrow
    const tomorrowCurrent = document.getElementById('tomorrow-current');
    const tomorrowFeelsLike = document.getElementById('tomorrow-feels-like');
    const tomorrowWindSpeed = document.getElementById('tomorrow-wind-speed');
    const tomorrowWindDirection = document.getElementById('tomorrow-wind-direction');
    const tomorrowWeather = document.getElementById('tomorrow-weather');
    const tomorrowIcon = document.getElementById('tomorrow-icon');
   
    tomorrowCurrent.textContent = forecast.daily[1].temp.day;
    tomorrowFeelsLike.textContent = forecast.daily[1].temp.max;
    tomorrowWindSpeed.textContent = forecast.daily[1].wind_speed;
    const windDirectionTomorrow = forecast.daily[1].wind_deg;
    tomorrowWindDirection.textContent = getWindDirection(windDirectionTomorrow);
    tomorrowWeather.textContent = forecast.daily[1].weather[0].main;
    tomorrowIcon.setAttribute('src', getIcon(forecast.daily[1].weather[0].icon));
    tomorrowIcon.setAttribute('alt', forecast.daily[1].weather[0].description);

    //Getting the info for the last updated part of the footer
    const lastUpdated = document.getElementById('last-updated');
    lastUpdated.textContent = getUpdate(forecast.current.dt);
}