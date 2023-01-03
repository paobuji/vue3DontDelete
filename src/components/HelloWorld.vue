<script setup>
import { ref } from 'vue';
</script>

<template>
  <div class="wrapper">
    <div class="left">left</div>
    <div class="right">right</div>
  </div>
</template>

<style lang="less" scoped>
.read-the-docs {
  color: #888;
}

.wrapper {
  display: flex;
  .left {
    color: white;
    width: 200px;
    height: 100vh;
    background-color: #222;
    resize: horizontal;
    overflow-x: scroll;
  }
  .left::-webkit-scrollbar {
    width: 20px;
    height: inherit;
    object-fit: cover;
  }
  .right {
    width: calc(100vw - 200px);
    height: 100vh;
    background-color: #999;
  }
}
</style>
