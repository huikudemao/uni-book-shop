<template>
	<view class="u-p-l-40 u-p-r-40">
		<u-form :model="form" ref="uForm" :error-type="errorType">
			<u-form-item required  label="昵称" prop="name">
				<u-input v-model="form.name" />
			</u-form-item>
		</u-form>
		<u-button @click="submit">修改信息</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				errorType:['message'],
				form: {
					name: '',
				},
				rules: {
					name: [{
						required: true,
						message: '请输入昵称',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
				}
			}
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
			this.form.name = this.vuex_user.name
		},
		methods: {
			submit() {
				this.$refs.uForm.validate(async (valid) => {
					if (valid) {
						// console.log(this.form)
						// console.log("111")
						// 更新用户信息
						await this.$u.api.userUpdate(this.form)
						// 更新用户信息,更新vuex_user
						this.$u.utils.updateUser()
						
						// 更新成功弹窗提示
						this.$u.toast('修改成功！！')
					} 
				})
			}
		}
	}
</script>

<style>

</style>
