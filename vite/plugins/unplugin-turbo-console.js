/**
 * 支持一键从控制台输出跳转到编辑器源代码
 * https://www.npmjs.com/package/unplugin-turbo-console
 */
import TurboConsole from 'unplugin-turbo-console/vite'

export default function createConsole() {
	return TurboConsole()
}
