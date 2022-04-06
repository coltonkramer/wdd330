import { getWindDirection, getIcon, getUpdate, getDayofTheWeek } from './utilities.js'


export function addWeather(forecast, place){
    //Getting the info for the last updated part of the footer
    const date = new Date();
    const lastUpdated = document.getElementById('last-updated');
    lastUpdated.textContent = getUpdate(forecast.current.dt);
    //Get the city and country
    const location = document.getElementById('location');
    //Information needed for the forcast today
    const todayCurrent = document.getElementById('today-current');
    const todayHigh = document.getElementById('today-high');
    const todayLow = document.getElementById('today-low');
    const todayWindSpeed = document.getElementById('today-wind-speed');
    const todayWindDirection = document.getElementById('today-wind-direction');
    const todayWeather = document.getElementById('today-weather');
    const todayIcon = document.getElementById('today-icon');
    
    
    location.textContent = place;
    todayCurrent.textContent = Math.round(forecast.current.temp);
    todayHigh.textContent = Math.round(forecast.daily[0].temp.max);
    todayLow.textContent = Math.round(forecast.daily[0].temp.min);
    todayWindSpeed.textContent = Math.round(forecast.current.wind_speed);
    const windDirectionToday = Math.round(forecast.current.wind_deg);
    todayWindDirection.textContent = getWindDirection(windDirectionToday);
    todayWeather.textContent = forecast.current.weather[0].main;
    todayIcon.setAttribute('src', getIcon(forecast.current.weather[0].icon));
    todayIcon.setAttribute('alt', forecast.current.weather[0].description);


    //Information needed for the forcast tomorrow
    const tomorrowCurrent = document.getElementById('tomorrow-current');
    const tomorrowHigh = document.getElementById('tomorrow-high');
    const tomorrowWindSpeed = document.getElementById('tomorrow-wind-speed');
    const tomorrowWindDirection = document.getElementById('tomorrow-wind-direction');
    const tomorrowWeather = document.getElementById('tomorrow-weather');
    const tomorrowIcon = document.getElementById('tomorrow-icon');
    const tomorrowHeader = document.getElementById('tomorrow-header');

   
    tomorrowCurrent.textContent = Math.round(forecast.daily[1].temp.day);
    tomorrowHigh.textContent = Math.round(forecast.daily[1].temp.max);
    tomorrowWindSpeed.textContent = Math.round(forecast.daily[1].wind_speed);
    const windDirectionTomorrow = Math.round(forecast.daily[1].wind_deg);
    tomorrowWindDirection.textContent = getWindDirection(windDirectionTomorrow);
    tomorrowWeather.textContent = forecast.daily[1].weather[0].main;
    tomorrowIcon.setAttribute('src', getIcon(forecast.daily[1].weather[0].icon));
    tomorrowIcon.setAttribute('alt', forecast.daily[1].weather[0].description);
    tomorrowHeader.textContent = getDayofTheWeek(getUpdate(date).getDay() + 1);

     //Information needed for the forcast tomorrow
     const nextCurrent = document.getElementById('next-current');
     const nextHigh = document.getElementById('next-high');
     const nextWindSpeed = document.getElementById('next-wind-speed');
     const nextWindDirection = document.getElementById('next-wind-direction');
     const nextWeather = document.getElementById('next-weather');
     const nextIcon = document.getElementById('next-icon');
     const nextHeader = document.getElementById('next-header');

    
     nextCurrent.textContent = Math.round(forecast.daily[2].temp.day);
     nextHigh.textContent = Math.round(forecast.daily[2].temp.max);
     nextWindSpeed.textContent = Math.round(forecast.daily[2].wind_speed);
     const windDirectionnext = Math.round(forecast.daily[2].wind_deg);
     nextWindDirection.textContent = getWindDirection(windDirectionnext);
     nextWeather.textContent = forecast.daily[2].weather[0].main;
     nextIcon.setAttribute('src', getIcon(forecast.daily[2].weather[0].icon));
     nextIcon.setAttribute('alt', forecast.daily[2].weather[0].description);
     nextHeader.textContent = getDayofTheWeek(getUpdate(date).getDay() + 2);
}