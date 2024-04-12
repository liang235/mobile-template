import request from '@/plugins/axios.js' // axios

export default {
	login() {
		return request({
			url: '/SY_ORG_LOGIN.getMobileLoginUser.do',
			method: 'post',
		})
	},

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

	getTopInfosAll() {
		return request({
			url: '/SY_COMM_INFOS.getTopInfosAll.do',
			method: 'post',
		})
	},

	getOA() {
		return request({
			url: '/sy/base/view/OA_WORK_FLOW_API.getNextStep.do',
			method: 'post',
		})
	},
}
