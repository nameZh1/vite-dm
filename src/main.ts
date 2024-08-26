import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

// 样式
import './style/style.css'
import './style/common/common.scss'

// 组件
import { registerGlobalComponents } from '@/components/index';
// 动态注册全局组件
registerGlobalComponents(app);

app.mount('#app')
