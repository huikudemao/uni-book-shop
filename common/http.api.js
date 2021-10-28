// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	// 定义api属性 挂载api空对象
	vm.$u.api = {}
	// 首页
	vm.$u.api.index = (params = {}) => vm.$u.get('/api/index',params);
	
	// 登入认证
	vm.$u.api.authLogin = (params = {}) => vm.$u.post('/api/auth/login',params); // 登录
	vm.$u.api.authRegister = (params = {}) => vm.$u.post('/api/auth/register',params); // 注册
	vm.$u.api.logOut = () => vm.$u.post('/api/auth/logout'); // 退出登录
	vm.$u.api.ossToken = () => vm.$u.get('/api/auth/oss/token'); // 获取oss token 头像上传
	
	// 商品相关
	vm.$u.api.getGoods = id => vm.$u.get(`/api/goods/${id}`) // 商品详情数据
	vm.$u.api.Collects = id => vm.$u.post(`/api/collects/goods/${id}`) // 商品收藏
	vm.$u.api.goodsList = (params) => vm.$u.get('/api/goods',params); // 商品分类
	
	// 用户相关
	vm.$u.api.user = () => vm.$u.get('/api/user'); // 用户详情
	vm.$u.api.userUpdate = (params) => vm.$u.put('/api/user',params); // 更新个人信息
	vm.$u.api.userAvatar = (params) => vm.$u.patch('/api/user/avatar',params); // 更新个人信息
	
	// 购物车相关的
	vm.$u.api.carts = (params) => vm.$u.post('/api/carts',params); // 添加到购物车
	vm.$u.api.cartsList = () => vm.$u.get('/api/carts'); // 请求到购物车
	vm.$u.api.cartsGoods = () => vm.$u.get('/api/carts?include=goods'); // 请求购物车商品
	vm.$u.api.deleteCarts = id => vm.$u.delete(`/api/carts/${id}`) // 购物车商品删除
	vm.$u.api.putCarts = (id,num) => vm.$u.put(`/api/carts/${id}?num=${num}`) // 购物车商品数量改变
	vm.$u.api.checked = (params) => vm.$u.patch('/api/carts/checked',params) // 购物车商品选中
	
	// 订单相关的
	vm.$u.api.preview = () => vm.$u.get('/api/orders/preview') // 订单预览
	vm.$u.api.orders = () => vm.$u.get('/api/orders') // 提交订单
	
	// 收货地址相关的
	vm.$u.api.getAddress = () => vm.$u.get('/api/address') // 地址请求
	vm.$u.api.postAddress = (params) => vm.$u.post('/api/address',params) // 地址添加
	vm.$u.api.putAddress = (id,params) => vm.$u.put(`/api/address/${id}`,params) // 地址修改
	vm.$u.api.deleteAddress = id => vm.$u.delete(`/api/address/${id}`) // 购物车商品删除
	
	
	
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	// let index = (params = {}) => vm.$u.get('/api/index',params);
	// vm.$u.api = {
	// 	index
	// };
}

export default {
	install
}