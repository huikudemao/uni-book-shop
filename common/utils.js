const install = (Vue, vm) => {
	// 自定义工具 是否登入
	const isLogin = () => {
		// 如果没有token，跳转到登入页面
		const token = vm.vuex_token
		if (!token) {
			// 来自哪个页面
			// getCurrentPages 官方api 最后一个元素是离开的页面， pop取最后一个元素
			const currentPage = getCurrentPages().pop()
			// 获取页面路径，和请求参数
			const {options,route} = currentPage
			// console.log(options)
			// console.log(route)
			// 参数的key Object.keys返回一个所有元素为字符串的数组
			const optionsKeys = Object.keys(options)
			let params = ''
			if(optionsKeys !== 0){
				// reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
				// reduce遍历  pre上一次的结果(第一次是？)、当前的值，？默认值
				// 例：?id=xx&name=xx&
				// .slice(0,-1) 从字符串位置为0开始删除最后一个字符，-1倒数第一个字符
				params = optionsKeys.reduce((pre,current) => {
					// return pre + current + '=' + options[current] + '&'
					return `${pre}${current}=${options[current]}&`
				},'?').slice(0,-1)
			}
			console.log(params)
			// console.log(currentPage.route);
			// 缓存当前页，用于登录或者注册之后的跳转
			uni.setStorageSync('back_url',route+params)
			
			vm.$u.toast('请登录!!!')
			setTimeout(() => {
				vm.$u.route({
					type:'redirect',
					url: 'pages/auth/login',
				})
			}, 1500)
			return false
		}
		return true
	}


	// 更新用户信息
	const updateUser = async () => {
		// 请求用户信息
		const user = await vm.$u.api.user()
		// 缓存用户信息
		vm.$u.vuex('vuex_user',user)
	}
	
	
	
	vm.$u.utils = {
		isLogin,
		updateUser
	}
}

export default {
	install
}