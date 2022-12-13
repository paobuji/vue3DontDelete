<template>
  <button
    class="item"
    ref="box"
    @click="boxClick(index)"
    v-for="(item, index) in 5"
    :key="index"
  >
    {{ item }}
  </button>

  <div :ref="speRef">ref</div>
</template>

<script setup>
import { ref } from 'vue';
const box = ref();
const ref2 = ref('');
const boxClick = (index) => {
  console.log(box.value[index]);
};

const speRef = (el) => {
  console.log(el);
  ref2.value = el;
  console.log(ref2.value.innerText);
};
</script>

<style>
.item {
  width: 100px;
  height: 100px;
  border: 1px solid #999;
}
</style>
