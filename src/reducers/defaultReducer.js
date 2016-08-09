import {
  ADD_TWEET
} from '../constants/defaultConstants.js';


const initialState = {
  tweets: []
};

export default function(state = initialState, action) {
  switch(action.type) {
  case ADD_TWEET:
    return Object.assign({}, 
              state, 
              { tweets: state.tweets.concat(action.content) 
           });
  default:
    return state;
  }
}
