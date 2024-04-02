import { createRouter, createWebHashHistory } from 'vue-router'
// 路由相关数据
import { constantRoutes } from './routes'

const routes = [
	{
		path: '/',
		name: 'layout',
		component: () => import('@/layout/index.vue'),
		redirect: '/home',
		meta: {
			title: '主页',
		},
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('@/views/home/index.vue'),
				meta: {
					title: '首页',
				},
			},
			{
				path: '/qa',
				name: 'qa',
				component: () => import('@/views/qa/index.vue'),
				meta: {
					title: '问答',
				},
			},
			{
				path: '/video',
				name: 'video',
				component: () => import('@/views/video/index.vue'),
				meta: {
					title: '视频',
				},
			},
			{
				path: '/my',
				name: 'my',
				component: () => import('@/views/my/index.vue'),
				meta: {
					title: '我的',
				},
			},
		],
	},
]

/**
 * 创建一个可以被 Vue 应用程序使用的路由实例
 * @method createRouter(options: RouterOptions): Router
 * @link 参考：https://next.router.vuejs.org/zh/api/#createrouter
 */
const router = createRouter({
	history: createWebHashHistory(),
	routes: [...constantRoutes, ...routes],
})

export default router
