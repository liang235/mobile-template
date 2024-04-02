import { createApp } from 'vue'
import App from './App.vue'

// 加载 svg 图标
import 'virtual:svg-icons-register'

// 一定要在main.js中导入tailwind.css，防止vite每次hmr都会请求src/style/index.scss整体css文件导致热更新慢的问题
import '@/assets/styles/tailwindcss.scss'
// 全局样式
import '@/assets/styles/global.scss'

// 数据存储
import router from '@/router/index.js'
import pinia from '@/store/index.js'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
