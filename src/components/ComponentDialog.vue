<template>
  <div v-if="visible">componentdialog</div>
</template>

<script setup>
import { ref, defineExpose } from 'vue';
const name = ref('chp');
const visible = ref(false);

const show = () => {
  visible.value = !visible.value;
};
defineExpose({ show, name });
</script>
