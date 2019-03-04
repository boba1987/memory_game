import InitialState from "./InitialState";
import * as actions from "../constants/actionTypes";
import * as utilActions from "../utils/array";

const handlers = {
  [actions.RESET_BOARD]: (action) => utilActions.getShuffled(action.difficulty, action.x),
  [actions.FLIP_CARD]: (action, state) => {
    const newState = [...state];
    newState[action.ylocation][action.xlocation].flipped = true;

    return newState;
  },
  [actions.FLIP_BACK]: (action, state) => {
    const newState = [...state];
    action.locations.forEach(location => {
      newState[location.y][location.x].flipped = false;
    });

    return newState;
  },
  [actions.SET_CARD_TO_RESOLVED]: (action, state) => {
    const newState = [...state];
    action.locations.forEach(location => {
        newState[location.y][location.x].resolved = true;
      });

      return newState;
  },
  [actions.HIDE_ALL]: (action, state) => {
    const newState = [...state];
    newState.map(row => {
      return row.map(col => {
        col.flipped = false;
        return col;
      });
    });

    return newState;
  }
}

export default function BoardReducer(state = InitialState.board, action) {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](action, state)
  } else {
    return state
  }
}