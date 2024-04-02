import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import dayjs from 'dayjs'
import pkg from './package.json'
import createVitePlugins from './vite/plugins'

// https://vitejs.dev/config/
export default async ({ mode, command }) => {
	const env = loadEnv(mode, process.cwd())
	// 全局 scss 资源
	const scssResources = []
	fs.readdirSync('src/assets/styles/resources').forEach((dirname) => {
		if (fs.statSync(`src/assets/styles/resources/${dirname}`).isFile()) {
			scssResources.push(`@use "src/assets/styles/resources/${dirname}" as *;`)
		}
	})

	return defineConfig({
		base: './',
		// 开发服务器选项 https://cn.vitejs.dev/config/#server-options
		server: {
			open: true,
			port: 8888,
			proxy: {
				'/proxy': {
					target: env.VITE_APP_API_BASEURL,
					changeOrigin: true,
					rewrite: (path) => path.replace(/\/proxy/, ''),
				},
			},
			// 预热文件以提前转换和缓存结果，降低启动期间的初始页面加载时长并防止转换瀑布
			warmup: {
				clientFiles: ['./index.html', './src/{views,components}/*'],
			},
		},
		plugins: createVitePlugins(env, command === 'build'),
		define: {
			__SYSTEM_INFO__: JSON.stringify({
				pkg: {
					dependencies: pkg.dependencies,
					devDependencies: pkg.devDependencies,
				},
				lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
			}),
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: scssResources.join(''),
				},
			},
		},
		// 构建选项 https://cn.vitejs.dev/config/#server-fsserve-root
		build: {
			outDir: mode === 'production' ? 'dist' : `dist-${mode}`,
			sourcemap: env.VITE_BUILD_SOURCEMAP === 'true',
			// 消除打包大小超过500kb警告
			chunkSizeWarningLimit: 4000,
			rollupOptions: {
				// 静态资源分类打包
				output: {
					chunkFileNames: 'static/js/[name]-[hash].js',
					entryFileNames: 'static/js/[name]-[hash].js',
					assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
				},
			},
		},
	})
}
