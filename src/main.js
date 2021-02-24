import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载本地依赖
import testA from 'niu-datav-libs-dev/src/components/Test-a/index'
import testB from 'niu-datav-libs-dev/src/components/Test-b/index'
import testC from 'niu-datav-libs-dev/src/components/Test-c/index'

createApp(App)
  .use(router)
  .use(store)
  .use(testA)
  .use(testB)
  .use(testC)
  .mount('#app')
