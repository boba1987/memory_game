import * as types from "../constants/actionTypes";

export const fetchStart = () => async (dispatch) => {
  dispatch(
    {
      type: types.FETCH_START
    }
  );
  await new Promise(resolve => setTimeout(resolve, 1000));
  fetchSuccess(JSON.parse(localStorage.getItem('scores')), dispatch)
}

export const fetchSuccess = (data, dispatch) => {
  dispatch(
    {
      type: types.FETCH_SUCCESS,
      data
    }
  )
}