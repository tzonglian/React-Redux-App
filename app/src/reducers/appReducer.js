import { FETCH_SHIBA_START, FETCH_SHIBA_SUCCESS } from "../actions/appActions";

const initialState = {
  shiba: "",
  isLoading: false,
  error: "",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHIBA_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SHIBA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        shiba: action.payload,
      };
    default:
      return state;
  }
};
