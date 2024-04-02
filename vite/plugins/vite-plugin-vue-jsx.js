/**
 * vite 支持 jsx 语法
 */
import vueJsx from '@vitejs/plugin-vue-jsx'

export default function createViteJsx() {
	return vueJsx()
}
