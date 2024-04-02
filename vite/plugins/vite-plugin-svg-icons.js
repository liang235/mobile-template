/*
 * @Description: vite 中使用 svg 图标
 */
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'node:path'

export default function createSvgIcon() {
	return createSvgIconsPlugin({
		// 指定需要缓存的图标文件夹
		iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
		// 指定 symbolId 格式
		symbolId: 'icon-[dir]-[name]',
	})
}
