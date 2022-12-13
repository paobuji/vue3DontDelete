<template>
  <div>{{ flatArr }}</div>
</template>

<script setup>
import { ref } from 'vue';
const arr = ref([1, 2, [3, 4, [5, 'a', 'zzz', [3, 20]]]]);

// 1.toString()方法
// const dealData = (item) => {
//   if (Object.prototype.toString.call(item) == '[object Number]') {
//     return parseInt(item);
//   } else if (Object.prototype.toString.call(item) == '[object String]') {
//     return item;
//   }
// };
// // const flatArr = arr.value.flat(Infinity);
// const flatArr = arr.value
//   .toString()
//   .split(',')
//   .map((res) => dealData(res));

//2.递归循环
let newVal = [];
const flatFun = (par) => {
  par.forEach((item, index) => {
    if (Array.isArray(item)) {
      flatFun(item);
    } else {
      newVal.push(item);
    }
  });
  return [...new Set(newVal)];
};
const flatArr = flatFun(arr.value);
</script>
