/*
 * @Description: vite 使用插件集合
 */
import vue from '@vitejs/plugin-vue'
import createViteJsx from './vite-plugin-vue-jsx'
import createViteLegacy from './vite-plugin-legacy'
import createDevtools from './vite-plugin-vue-devtools'
import createAutoImport from './unplugin-auto-import'
import createComponents from './unplugin-vue-components'
import createConsole from './unplugin-turbo-console'
import createSvgIcon from './vite-plugin-svg-icons'
import createMock from './vite-plugin-fake-server'
import createCompression from './vite-plugin-compression'

export default function createVitePlugins(viteEnv, isBuild = false) {
	const vitePlugins = []
	vitePlugins.push(vue())
	vitePlugins.push(createViteJsx())
	vitePlugins.push(createViteLegacy())
	vitePlugins.push(createDevtools(viteEnv))
	vitePlugins.push(createAutoImport())
	vitePlugins.push(createComponents())
	vitePlugins.push(createConsole())
	vitePlugins.push(createSvgIcon())
	vitePlugins.push(createMock(viteEnv, isBuild))
	vitePlugins.push(createCompression())

	return vitePlugins
}
