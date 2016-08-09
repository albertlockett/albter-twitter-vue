import defaultReducer from '../../src/reducers/defaultReducer.js';
import {
  ADD_TWEET
} from '../../src/constants/defaultConstants';

describe('(Reducer) defaultReducer', () => {
  it('adds a tweet to the list of tweets on ADD_TWEET action', () => {
    const state = {
      tweets: []
    };
    const tweet = 'Test';
    const action = {
      type: ADD_TWEET,
      content: tweet
    };
    
    const nextState = defaultReducer(state, action);
    expect(nextState.tweets).not.toBeUndefined();
    expect(nextState.tweets.length).toBe(1);
    expect(nextState.tweets.indexOf(tweet)).toBe(0);
  });

  it('returns the same state object when the action is not recognized', () => {
    const state = {
      tweets: []
    };
    const action = {
      type: 'Unrecognized action',
    };
    const nextState = defaultReducer(state, action);
    expect(state === nextState).toBe(true);
  });


});
