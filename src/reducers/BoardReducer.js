import InitialState from "./InitialState";
import * as actions from "../constants/actionTypes";
import * as utilActions from "../utils/array";

function updateState(oldValues, newValues) {
  return Object.assign([], oldValues, newValues);
}

const handlers = {
  [actions.RESET_BOARD]: (action) => utilActions.getShuffled(action.difficulty, action.x),
  [actions.FLIP_CARD]: (action, state) => {
    const newState = state[action.ylocation][action.xlocation].flipped = true;

    return updateState(state, newState);
  },
  [actions.FLIP_BACK]: (action, state) => {
    const newState = action.locations.forEach(location => {
      state[location.y][location.x].flipped = false;
    });

    return updateState(state, newState);
  },
  [actions.SET_CARD_TO_RESOLVED]: (action, state) => {
    const newState = action.locations.forEach(location => {
        state[location.y][location.x].resolved = true;
      });

      return updateState(state, newState);
  },
  [actions.HIDE_ALL]: (action, state) => {
    const newState = state.map(row => {
      return row.map(col => {
        col.flipped = false;
        return col;
      });
    });

    return updateState(state, newState);  
  }
}

export default function BoardReducer(state = InitialState.board, action) {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](action, state)
  } else {
    return state
  }
}