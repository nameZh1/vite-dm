import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

// 样式
import '@/style/common/common.scss'
import '@/style/main.scss'
import 'element-plus/dist/index.css'


// 组件
import { registerGlobalComponents } from '@/components/index';
// 动态注册全局组件
registerGlobalComponents(app);
import ElementPlus from 'element-plus'

app.use(ElementPlus)
app.mount('#app')
