/*
 * @Description: 提供虚拟的 API 服务器
 */
import { vitePluginFakeServer } from 'vite-plugin-fake-server'

export default function createMock(env, isBuild) {
	const { VITE_BUILD_MOCK } = env
	return vitePluginFakeServer({
		logger: !isBuild,
		include: 'src/mock',
		infixName: false,
		enableProd: isBuild && VITE_BUILD_MOCK === 'true',
	})
}
