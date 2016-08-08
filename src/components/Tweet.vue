<template>
  <div class="tweet">{{ tweet }}</div>
</template>

<script>
  export default {
    props: ['tweet']
  };
</script>

<style>
.tweet {
  width:90%;
  border-radius:4px;
  border:1px solid lightgrey;
  background-color: white;
  margin: auto;
  margin-top:2px;
}
</style>
