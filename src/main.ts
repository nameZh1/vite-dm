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
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 路由
import router from "@/router/index";

app.use(ElementPlus, {
  locale: zhCn
})
app.use(router)
app.mount('#app')
