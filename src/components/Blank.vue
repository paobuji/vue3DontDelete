<template>{{ store.getters.name }}</template>

<script setup>
// import store from '../vuexstore/index.js';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
// const name = computed(() => store.getters.name); //我 突然想起来了这是在那个地方学习到的呢,就是一步一步推导过来的.
const name = computed(() => store.getters.name); //就是这样的
</script>
