import { createApp } from 'vue';
import { createStore } from 'vuex'

import App from './App.vue';
import router from './routers/index.js';
import store from './stores/index.js';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app')