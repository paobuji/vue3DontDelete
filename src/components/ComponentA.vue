<template>
  <div>
    <div>A</div>
    <div>{{ $store.count }}</div>
    <button @click="addOne">+1</button>
  </div>
</template>

<script>
import { store } from '../store/store.js';
export default {
  data() {
    return {};
  },
  methods: {
    addOne() {
      this.$store.addCount();
    },
  },
  created() {
    // console.log(store.count);
    console.log(this.$store);
  },
};
</script>
