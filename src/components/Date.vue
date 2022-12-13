<template>
  <div>
    <!-- <div :id="idshow()">{{ time }}</div>
    <button @click="getNowDate">获取最新时间</button>
    <button @click="emitChange">触发事件总线</button> -->
    <button>{{ date }}</button>
    <input type="text" v-model="a" />
    <button @click="addA">给a+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: '',
    };
  },
  methods: {
    idshow() {
      return '';
    },
    getNowDate() {
      let options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        // hour: 'numeric',
        // minute: 'numeric',
        // second: 'numeric',
        // hour12: false,
        // dateStyle: 'long',
      };
      this.time = new Date()
        .toLocaleString('zh-ch', options)
        .replace(/\//g, '-');
    },
    emitChange() {
      this.$bus.emit(this.$eventname.watchchange, {});
    },
  },
};
</script>

<script setup>
import { ref } from 'vue';
const options = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
};
const date = ref(
  new Date().toLocaleString('zh-ch', options).split('/').join('-')
);

const a = ref(100);
function addA() {
  a.value = parseInt(a.value) + 1;
}
</script>
