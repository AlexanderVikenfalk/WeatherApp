import { FETCH_WEATHER } from "../actions/index";
const initalState = {
  list:[],
  selectedWeather:null
}
export default function(state = initalState, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {...state,selectedWeather:action.payload.data};
  }
  return state;
}
