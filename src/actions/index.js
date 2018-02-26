import axios from "axios";

const API_KEY = "afde8dc629c4bd9045bcf44f082a721f";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = "FETCH_WEATHER";
export const FETCH_LOCATION = "FETCH_LOCATION";


// Getting User position
export function getUserPosition() {
  const geolocation = navigator.geolocation;
  return {
    type: FETCH_LOCATION,
    payload: new Promise((resolve, reject) => {
      if (!geolocation) {
        reject(new Error("Not Supported"));
      }
  
      geolocation.getCurrentPosition(
        position => {
          resolve(position)
        },
        () => {
          reject(new Error("Permission denied"));
        }
      )
    })
  };
}

// Using user position to get current weather
export function getCurrentWeather(coords){
  const {latitude,longitude} = coords;
  const request = axios.get(`${ROOT_URL}&lat=${latitude}&lon=${longitude}`);

  return {
    type: FETCH_WEATHER ,
    payload: request
  }
}

// export function fetchWeather(city) {
//   const url = `${ROOT_URL}&q=${city},us&units=metric`;
//   const request = axios.get(ROOT_URL);

//   return {
//     type: FETCH_WEATHER,
//     payload: request
//   };
// }
