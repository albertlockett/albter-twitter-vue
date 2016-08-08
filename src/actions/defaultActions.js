import {
  ADD_TWEET
} from '../constants/defaultConstants.js';

export  const addAction =  function(content) {
  return {
    type: ADD_TWEET,
    content: content
  }
}
