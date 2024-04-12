import axios from 'axios' // ajax 请求
import qs from 'qs'

// 创建一个 axios 实例
const service = axios.create({
	baseURL: import.meta.env.VITE_API_URL, // 请求地址
	timeout: 10000, // 请求时长
	responseType: 'json', // 浏览器将要响应的数据类型
	Authorization:
		'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcxMjcxMzU1MDA2NywiZXhwIjoxNzEyNzk5OTUwMDY3LCJqdGkiOiJucXVYZlBmR0h5cXBLS0ZQcG91RCIsInVzZXJuYW1lIjoiYWRtaW4ifQ.QF7LLldovTZhyfkxg-JBvZAd_iPP9BOwmzEw1d_J2pY',
	/**
	 * 请求参数进行字符串化处理
	 * 修复 get 请求传递嵌套对象或数组时无法正常编码问题
	 * https://www.npmjs.com/package/qs
	 */
	JSESSIONID: 'abcGiJ0w1vVg14zVijb7y',
	paramsSerializer: {
		serialize(params) {
			return qs.stringify(params, { allowDots: true })
		},
	},
})

// 添加请求拦截器，在发送请求之前做些什么 token
service.interceptors.request.use(
	(request) => {
		// 是否将 POST 请求参数进行字符串化处理
		if (request.method === 'post') {
			// request.data = qs.stringify(request.data, {
			// 	arrayFormat: 'brackets',
			// })
		}
		return request
	},
	(error) => {
		// 对请求错误做些什么
		return Promise.reject(error)
	}
)

// 添加响应拦截器
service.interceptors.response.use(
	(response) => {
		/**
		 * ERROR,报错提示
		 * 全局拦截请求发送后返回的数据，如果数据有报错则在这做全局的错误提示
		 * 假设返回数据格式为：{ status: 1, error: '', data: '' }
		 * 规则是当 status 为 1 时表示请求成功，为 0 时表示接口需要登录或者登录状态失效，需要重新登录
		 * 请求出错时 error 会返回错误信息
		 */
		if (response.data.status === 1) {
			if (response.data.error !== '') {
				// 消息提示，自定义
				return Promise.reject(response.data)
			}
		} else {
			// 去登录页操作
		}
		return Promise.resolve(response.data)
	},
	(error) => {
		// 对响应错误做点什么
		let { message } = error

		if (message === 'Network Error') {
			message = '后端网络故障'
		} else if (message.includes('timeout')) {
			message = '接口请求超时'
		} else if (message.includes('Request failed with status code')) {
			message = `接口${message.substr(message.length - 3)}异常`
		}

		// 消息提示，自定义
		return Promise.reject(error)
	}
)

export default service
