import Vue from 'vue';
import App  from './components/App.vue';
import store from './store.js';

// requiring this here so it gets copied to dist when webpack runs
require('file?name=[name].[ext]!../index.html');

// initalize app
new Vue({
  el: 'body',
  components: {
    app: App
  }
});
