/**
 * Vue 开发者工具支持
 * https://www.npmjs.com/package/vite-plugin-vue-devtools
 */
import VueDevTools from 'vite-plugin-vue-devtools'

export default function createDevtools(env) {
	const { VITE_OPEN_DEVTOOLS } = env
	return VITE_OPEN_DEVTOOLS === 'true' && VueDevTools()
}
