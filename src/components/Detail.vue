<template>
  <div>
    <tab-bar></tab-bar>
    <div>{{ id }}</div>
  </div>
</template>

<script setup>
import TabBar from './TabBar.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const id = ref('');
const route = useRoute();
onMounted(() => {
  id.value = route.query.id;
});
</script>
<script>
// export default {
//   data() {
//     return {
//       value: '',
//     };
//   },
//   created() {
//     this.value = this.$route.query.id;
//     console.log(this.$route);
//   },
// };
</script>
