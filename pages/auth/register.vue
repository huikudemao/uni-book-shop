<template>
	<view>
		<view class="title">欢迎注册图书商城</view>
		<!-- 昵称 -->
		<u-field
		class="title_item"
			v-model="name"
			label="昵称"
			required
			placeholder="请输入您的昵称">
		</u-field>
		<!-- 邮箱 -->
		<u-field
		class="title_item"
			v-model="email"
			label="邮箱"
			required
			:error-message="email_s"
			type="email"
			placeholder="请输入您的邮箱">
		</u-field>
		<!-- 密码 -->
		<u-field
		class="title_item"
			v-model="password"
			label="密码"
			required
			type="password"
			placeholder="请输入您的密码">
		</u-field>
		<!-- 确认密码 -->
		<u-field
		class="title_item"
			v-model="password_confirmation"
			label="确认密码"
			required
			type="password"
			:error-message="password_s"
			placeholder="请确认您的密码">
		</u-field>
		<!-- 注册按钮 -->
		<button class="btn" type="primary" @click="submit">注册</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'', // 昵称
				email:'', // 邮箱
				password:'', // 密码
				password_confirmation:'', // 确认密码
				email_s:'', // 邮箱错误提示
				password_s:'', // 密码错误提示
			}
		},
		methods: {
			// 执行注册
			async submit(){
				let flag = true
				if(flag){
					// 1.表单验证
					if(this.email_s){
						this.email_s = ''
					}else if(this.password_s){
						this.password_s = ''
					}
					// 判断是否为邮箱
					if(this.$u.test.isEmpty(this.email)){
						this.email_s = '邮箱不能输入为空'
						return true
					}
					if(!this.$u.test.email(this.email)){
						this.email_s = '邮箱格式不正确！'
						return true
					}
					// 判断密码是否一致
					if(!(this.password === this.password_confirmation)){
						this.password_s = '您输入的两次密码不一致！！'
						return true
					}
				}
				// console.log('1111');
				// 2.准备提交参数
				const params = {
					name:this.name,
					email:this.email,
					password:this.password,
					password_confirmation:this.password_confirmation
				}
				// 3.请求api，执行注册
				const res = await this.$u.api.authRegister(params)
				// console.log(res);
				this.$u.toast('注册成功，将自动跳转到登录页')
				// 4. 注册成功之后，重定向到登录页面(redirect)
				setTimeout(() => {
					uni.redirectTo({
						url:'/pages/auth/login'
					})
				},1000)
			}
		}
	}
</script>

<style>
	.btn{
		height: 80rpx;
		line-height: 80rpx;
		width: 50%;
		margin-top:50rpx ;
		border-radius: 20rpx;
	}
	.title {
		text-align: center;
		margin-top: 30rpx;
		font-size: 50rpx;
		font-weight: 500;
		margin-bottom: 30rpx;
	}
	.title_item{
		margin: 10rpx 0;
	}
</style>
