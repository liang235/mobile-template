/*
 * @Description: 自动导入 composition api
 */
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from '@vant/auto-import-resolver'

export default function createAutoImport() {
	return AutoImport({
		imports: ['vue', 'vue-router', 'pinia'],
		/**
		 * 自定义解析器，与 unplug-vue-components 兼容
		 * 参见 https://github.com/antfu/unplugin-auto-import/pull/23/
		 */
		resolvers: [VantResolver()],
		/**
		 * 自动导入目录下的模块导出
		 * 默认情况下，它只扫描目录下的一层模块
		 */
		dirs: ['./src/utils/composables/**'],
		eslintrc: {
			// 默认false, true启用。false生成一次就可以，避免每次工程启动都生成
			enabled: false,
			// filepath: './.eslintrc-auto-import.json', // 生成json文件
			globalsPropValue: true,
		},
	})
}
