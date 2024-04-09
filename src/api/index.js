import request from '@/plugins/axios.js' // axios

export default {
	// 获取登陆用户信息
	getMobileLoginUser() {
		return request({
			url: '/SY_ORG_LOGIN.getMobileLoginUser.do',
			method: 'post',
		})
	},

	// 获取系统变量
	getVars() {
		return request({
			url: '/SY_COMM_CONFIG.getVars.do',
			method: 'post',
		})
	},
}
