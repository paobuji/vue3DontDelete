<template>
  <hello-world msg="sbs"></hello-world>
  <tab-bar></tab-bar>
  <component-dialog ref="componentdialog"></component-dialog>
  <blank></blank>
  <button @click="callChildDialog">弹窗组件</button>
  <div v-for="(item, index) in 2" :key="index">
    <button @click="naviDetail(item)" style="margin: 10px 0">{{ item }}</button>
  </div>
  <button @click="test">测试vuexstore</button>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<script setup>
import TabBar from './TabBar.vue';
import HelloWorld from './HelloWorld.vue';
import ComponentDialog from './ComponentDialog.vue';
import Blank from './Blank.vue';

// import store from '../vuexstore/index.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter();
const vuexstore = useStore();
const componentdialog = ref();

//调用子组件里的方法
const callChildDialog = () => {
  console.log(componentdialog.value.name);
  componentdialog.value.show();
};

const naviDetail = (item) => {
  router.push({
    path: '/detail',
    query: {
      id: item,
    },
  });
};

const test = () => {
  console.log(vuexstore.dispatch('setname'));
};
</script>
