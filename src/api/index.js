import request from '@/plugins/axios.js' // axios

export default {
	// 获取登陆用户信息
	getMobileLoginUser() {
		return request({
			url: '/SY_ORG_LOGIN.getMobileLoginUser.do',
			method: 'post',
		})
	},
}
