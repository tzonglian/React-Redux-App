import axios from "axios";

export const FETCH_SHIBA_START = "FETCH_SHIBA_START";
export const FETCH_SHIBA_SUCCESS = "FETCH_SHIBA_SUCCESS";
export const FETCH_SHIBA_FAILURE = "FETCH_SHIBA_FAILURE";

export const fetchShiba = (url) => (dispatch) => {
  dispatch({ type: FETCH_SHIBA_START });
  axios
    .get(url)
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_SHIBA_SUCCESS, payload: res.data.message });
    })
    .catch((err) => console.log(err));
};
