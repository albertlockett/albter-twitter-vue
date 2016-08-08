<template>
  <div class="app">
    <app-header></app-header>
    <tweet-input></tweet-input>
    <tweet-list :tweets="tweets"></tweet-list>
  </div>
</template>


<script>
  import AppHeader from './AppHeader.vue';
  import TweetInput from "./TweetInput.vue";
  import TweetList from "./TweetList.vue";
  

  export default {
    components: {
      AppHeader,
      TweetInput,
      TweetList
    },
    data: function() {
      return {
        tweets: this.$select('tweets')
      }
    },
  }
</script>

<style>
.app {
  font-family: sans-serif;
  width: 90%;
  margin:auto;
  background-color: lightblue;
  height: 100vh;
  text-align:center;
}
</style>
