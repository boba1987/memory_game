import * as types from "../constants/actionTypes";

export const fetchStart = () => async (dispatch) => {
  dispatch(
    {
      type: types.FETCH_START
    }
  );
  await new Promise(resolve => setTimeout(resolve, 1000));
  dispatch(fetchSuccess(JSON.parse(localStorage.getItem('scores'))));
}

export const fetchSuccess = (data) => {
  return {
    type: types.FETCH_SUCCESS,
    data
  }
}