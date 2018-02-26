import { FETCH_LOCATION } from "../actions/index";

const initialState = {
    selectedLocation: null,
}

export default function(state = initialState, action) {
  console.log("Action received", action);    
    switch (action.type) {
      case FETCH_LOCATION:
        return {
            ...state,
            selectedLocation: action.payload,
        }
        // return action.payload;
    }
    return state;
}
  

export const getLocationState = ({selectedLocation}) => ({selectedLocation});