<template>
  <button class="item" :ref="boxRef" v-for="(item, index) in arr" :key="index">
    {{ item }}
  </button>
</template>

<script setup>
import { ref } from 'vue';
const arr = ref([1, 2, 3, 4, 5]);
const refarr = ref([]);
const boxRef = (el) => {
  console.log(el);
  refarr.value.push(el);
};
</script>

<style>
.item {
  width: 100px;
  height: 100px;
  border: 1px solid #999;
}
</style>
