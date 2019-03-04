import gameScore from './GameScoreReducer';
import * as actions from "../constants/actionTypes";
import InitialState from "./InitialState";
import expect from 'expect';

describe('fetch reducer', () => {
  it('should return the initial state', () => {
    expect(gameScore(undefined, InitialState.score)).toEqual(0);
  });

  it('should update score by increment', () => {
    const updateScoreAction = {
      type: actions.UPDATE_SCORE,
      points: 10
    };

    expect(gameScore(undefined, updateScoreAction)).toEqual(10);
  });

  it('should reset score to 0', () => {
    const resetScoreAction = {
      type: actions.RESET_SCORE
    };

    expect(gameScore(undefined, resetScoreAction )).toEqual(0);
  });
});