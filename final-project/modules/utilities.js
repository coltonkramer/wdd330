
//Takes the degree and converts it to a cardnal direction
export const getWindDirection = (wind) => {
    if (wind >= 328 || wind < 23 && wind <= 360){
        return 'N';
    }
    else if(wind >= 23 || wind < 68 && wind <= 360){
        return 'NE';
    }
    else if(wind >= 68 || wind < 113 && wind <= 360){
        return 'E';
    }
    else if(wind >= 113 || wind < 158 && wind <= 360){
        return 'SE';
    }
    else if(wind >= 158 || wind < 203 && wind <= 360){
        return 'S';
    }
    else if(wind >= 203 || wind < 248 && wind <= 360){
        return 'SW';
    }
    else if(wind >= 248 || wind < 293 && wind <= 360){
        return 'W';
    }
    else if(wind >= 293 || wind < 328 && wind <= 360){
        return 'NW';
    }
}

//Returns the link to the weather icon
export function getIcon(icon){
    return "https://openweathermap.org/img/wn/" + icon + ".png"
  }

//Get the date and time the weather results were taken
export function getUpdate(dateTime){
    const lastUpdated = new Date(dateTime);
    return lastUpdated;
}
export function getDayofTheWeek(day){
    switch(day){
        case 0:
          return 'Sunday'
        case 1:
          return 'Monday'
        case 2:
          return 'Tuesday'
        case 3:
          return 'Wednesday'
        case 4:
          return 'Thursday'
        case 5:
          return 'Friday'
        case 6:
          return 'Saturday'
      }
}
