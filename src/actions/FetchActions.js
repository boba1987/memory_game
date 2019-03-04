import * as types from "../constants/actionTypes";

export const fetchStart = () => {
  return {
    type: types.FETCH_START
  }
}

export const fetchSuccess = data => {
  return async (dispatch) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch(
      {
        type: types.FETCH_SUCCESS,
        data
      }
    )
  }
}