import { createRouter, createWebHashHistory } from 'vue-router';

import List from '../components/List.vue';
import Detail from '../components/Detail.vue';
import DateCom from '../components/Date.vue';
import UseRef from '../components/Ref/UseRef.vue';
import UseRef2 from '../components/Ref/UseRef2.vue';
import Father from '../components/DataTransfer/Father.vue';
import Children from '../components/DataTransfer/Children.vue';
import Flat from '../components/Flat.vue';
import Layer from '../components/OpenLayers/Layer.vue';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: List },
    { path: '/list', component: import('../components/List.vue') },
    { path: '/detail', component: Detail },
  ],
});

export default router;
