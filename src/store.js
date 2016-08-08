import Vue from 'vue';
import Revue from 'revue';
import { createStore } from 'redux';

import defaultReducer from './reducers/defaultReducer.js';

const reduxStore = createStore(defaultReducer);
const store = new Revue(Vue, reduxStore);

module.exports = store;
