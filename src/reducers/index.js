import { combineReducers } from 'redux';
import gameSettings from './GameSettingsReducer';
import gameScore from './GameScoreReducer';
import complexity from './ComplexityReducer';
import enableGame from './EnableGameReducer';
import board from './BoardReducer';
import FetchReducer from './FetchReducer';
import scores from './ScoresReducer';

const rootReducer = combineReducers({
  gameSettings,
  gameScore,
  complexity,
  enableGame,
  board,
  FetchReducer,
  scores
});

export default rootReducer;
