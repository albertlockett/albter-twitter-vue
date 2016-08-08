<template>
  <div class="tweet-list">
    <template v-for="tweet in tweets">
      <tweet :tweet="tweet"></tweet>
    </template>
  </div>
</template>

<script>
  import Tweet from './Tweet.vue';
  export default {
    components: {
      Tweet
    },
    props:['tweets']
  }
</script>
