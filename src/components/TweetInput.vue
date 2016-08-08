<template>
  <div class="tweet-input">
    <textarea id="tweetInput" rows="4" cols="80"></textarea>
    <button v-on:click="dispatchTweet">Tweet</button>
  </div>
</template>

<script>
  import Vue from 'vue';
  import store from '../store.js';
  import { addAction } from '../actions/defaultActions.js';

  export default Vue.extend({
    methods: {
      dispatchTweet: function() {
        var tweetInput = document.getElementById("tweetInput");
        store.dispatch(addAction(tweetInput.value));
        tweetInput.value = ""; // reset input value
      }
    }
  });
</script>

<style>
.tweet-input {
  border-radius: 5px;
  color: lightgrey;

}
.tweet-input textarea {
  border: 1px solid lightblue;
}
</style>
