<template>
	<!-- 上传到阿里云oss,云存储 -->
	<u-upload 
	ref='upload'
	:action="action" 
	:max-size="5 * 1024 * 1024"
	 max-count="1"
	 :multiple="false"
	 :before-upload="beforeUpload"
	 :custom-btn="true"
	 :show-progress='false'
	 :form-data="formData"
	 :deletable="false"
	 :show-upload-list="false"
	 @on-success="OnSuccess"
	 >
	 <!-- 头像 -->
	    <u-avatar slot="addBtn" :src="vuex_user.avatar_url" size="140"></u-avatar>
	 </u-upload>
</template>

<script>
	let _this
	export default {
		name:"oss-upload",
		data() {
			return {
				// 上传地址
				action: 'http://www.example.com/upload',
				// 上传额外携带参数
				formData:{},
				upFileName:''
			};
		},
		created() {
			_this=this
		},
		methods:{
			// 上传前的钩子函数
			async beforeUpload(index, list) {
				// 请求api，获取oss token
				// beforeUpload事件在微信小程序拿不到this时，提前存储this，let _this
				const ossToken= await _this.$u.api.ossToken()
				// 获取文件名
				const {file} = list[0]
				// 兼容H5 条件编译
				// #ifdef H5
				const fileName = file.name
				// #endif
				// 除了H5 都兼容 条件编译
				// #ifndef H5
				const fileName = file.path
				// #endif
				
				// 请求API，获取oss token 
				const ossToken1 = await _this.$u.api.ossToken()
				
				// 设置上传域名
				_this.action = ossToken1.host
				
				// 处理唯一的文件名
				// 获取后缀名
				// slice() 方法以新的数组对象，返回数组中被选中的元素。从lastIndexOf()获取的位置开始返回数值，即返回.以及后面的后缀名
				// lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
				const suffix = fileName.slice(fileName.lastIndexOf('.'))
				// 随机生成唯一文件名，_this.$u.guid(20)生成唯一标识符
				const upFileName = _this.$u.guid(20) + suffix
				_this.upFileName = upFileName
				// 设置上传的额外参数
				_this.formData = {
					'key':_this.upFileName, // 上传后的文件名
					'policy':ossToken1.policy,//上传策略
					'OSSAccessKeyId':ossToken1.accessid,
					'success_action_status':'200', //让服务端返回200,不然，默认会返回204
					'signature':ossToken1.signature,//签名
				}
				console.log(ossToken1)

				return true;
			},
			// 上传成功触发的函数
			async OnSuccess(){
				// 移除预览区的图片
				this.$refs.upload.remove(0)
				// 请求API更新头像
				const res = await this.$u.api.userAvatar({avatar:this.upFileName})
				// 更新缓存的用户信息
				this.$u.utils.updateUser()
				// 提示信息
				this.$u.toast('修改成功！！')
			}
		}
	}
</script>

<style>

</style>
