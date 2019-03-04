import InitialState from "./InitialState";
import * as actions from "../constants/actionTypes";
import * as utilActions from "../utils/array";

function updateState(oldValues, newValues) {
  return Object.assign([], oldValues, newValues);
}

export default function BoardReducer(state = InitialState.board, action) {
  switch (action.type) {
    case actions.RESET_BOARD: return utilActions.getShuffled(action.difficulty, action.x);

    case actions.FLIP_CARD: {
      const newState = state[action.ylocation][action.xlocation].flipped = true;

      return updateState(state, newState);
    }

    case actions.FLIP_BACK: {
      const newState = action.locations.forEach(location => {
        state[location.y][location.x].flipped = false;
      });

      return updateState(state, newState);
    }

    case actions.SET_CARD_TO_RESOLVED: {
      const newState = action.locations.forEach(location => {
        state[location.y][location.x].resolved = true;
      });

      return updateState(state, newState);
    }

    case actions.HIDE_ALL: {
      const newState = state.map(row => {
        return row.map(col => {
          col.flipped = false;
          return col;
        });
      });

      return updateState(state, newState);  
    }

    default: return state;
  }
}