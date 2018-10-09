import commentsReducer from './comments';
import { SAVE_COMMENT } from '../actions/types';

it('handles actions for SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'new comment'
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual(['new comment']);
});

it('handles actions with unknow type', () => {
  const newState = commentsReducer([], {});
  expect(newState).toEqual([]);
});
