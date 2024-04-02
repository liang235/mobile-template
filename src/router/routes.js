// 固定路由（默认路由）
const constantRoutes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/index.vue'),
		meta: {
			title: '登录',
		},
	},
]

export { constantRoutes }
