/*
 * @Description: 按需导入
 */
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'

export default function createComponents() {
	return Components({
		// 自定义组件的解析器
		resolvers: [VantResolver()],
		// 用于搜索组件的目录的相对路径
		dirs: ['src/components'],
		deep: true,
		// 变换目标的滤波器
		include: [/\.vue$/, /\.vue\?vue/, /\.jsx$/],
	})
}
