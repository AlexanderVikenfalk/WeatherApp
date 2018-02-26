import { combineReducers } from 'redux';
import WeatherReducer from './reducerWeather';
import LocationReducer from './reducerLocation';


const rootReducer = combineReducers({
  location: LocationReducer,
  weather: WeatherReducer
});

export default rootReducer;
