import mitt from 'mitt';
import { createApp } from 'vue';
import './style.css';
import EventName from './EventName.js';
import App from './App.vue';
// import { store } from './store/store.js';
import router from './router/router.js';

// vuexStore
import vuexstore from './vuexstore/index.js';

let app = createApp(App);
app.config.globalProperties.$bus = new mitt();
app.config.globalProperties.$eventname = EventName;
// app.config.globalProperties.$store = store;
app.use(router); //vue实例绑定路由
app.use(vuexstore);
app.mount('#app');
