// 固定路由（默认路由）
const constantRoutes = [
	{
		path: '/:all(.*)*',
		name: 'notFound',
		component: () => import('@/views/error/404.vue'),
		meta: {
			title: '找不到页面',
		},
	},
]

export { constantRoutes }
