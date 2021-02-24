import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载本地依赖
import dataVComponent from 'niu-datav-libs-dev'

createApp(App)
  .use(router)
  .use(store)
  .use(dataVComponent)
  .mount('#app')
