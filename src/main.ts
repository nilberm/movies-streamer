import '@/assets/dist/build.css';
import '@/assets/tailwind.css';
import 'vue3-toastify/dist/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';


const app = createApp(App);

app.use(router);

app.use(Vue3Toastify, {
  autoClose: 3000,
} as ToastContainerOptions);

app.mount('#app');
