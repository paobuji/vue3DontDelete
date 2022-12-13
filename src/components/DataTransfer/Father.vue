<template>
  <div>父组件{{ num }}</div>
  <button @click="callShow">父组件调用子组件的方法</button>
  <children ref="children" @refreshList="refreshList"> </children>
</template>

<script setup>
import Children from './Children.vue';
import { ref } from 'vue';
const num = ref(1); //定义变量
const children = ref(); //获取DOM
const refreshList = (params) => {
  num.value = num.value + 1;
};

const callShow = () => {
  children.value.show();
};
</script>
