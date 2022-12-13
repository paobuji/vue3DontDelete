<template>
  <div>
    <slot></slot>
    <div>{{ id || '暂无数据' }}</div>
    <button @click="refresh">触发父组件方法</button>
  </div>
</template>

<script setup>
// import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  id: String,
});
const emit = defineEmits(['refreshList']);
const refresh = () => {
  emit('refreshList');
};

const show = () => {
  alert('调用了');
};

defineExpose({
  show,
});
</script>
