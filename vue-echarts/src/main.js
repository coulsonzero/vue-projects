import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// 5. 挂载路由
createApp(App).use(router).mount("#app");
