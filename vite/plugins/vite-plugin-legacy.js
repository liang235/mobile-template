/*
 * @Description: 解决低版本浏览器不兼容的问题
 */
import vueLegacy from '@vitejs/plugin-legacy'

export default function createViteLegacy() {
	return vueLegacy({
		renderLegacyChunks: false,
		modernPolyfills: ['es.array.at', 'es.array.find-last'],
	})
}
