<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TabBar from './components/TabBar.vue';
import Date from './components/Date.vue';
import ComponentA from './components/ComponentA.vue';
import ComponentB from './components/ComponentB.vue';
</script>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$bus.on(this.$eventname.watchchange, (par) => {
      console.log('监听到了');
    });
  },
};
</script>

<template>
  <div>
    <!-- <Date></Date> -->
    <!-- <div class="box">
      <ComponentA></ComponentA>
      <ComponentB></ComponentB>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
