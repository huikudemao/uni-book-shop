<template>
	<view class="content ">
		<u-swiper :list="slides" name='img_url' height="320"></u-swiper>
		<view class="u-text-center u-margin-top-20">
			<u-tabs :list="sortList" :current="current" @change="changeSort"
			        bar-width="100" item-width="160"></u-tabs>
		</view>
		<u-row gutter="16" class="u-skeleton">
			<u-col span="6" v-for="(goods,index) in goodsList" :key="(index)">
				<goods-card :goods='goods'></goods-card>
			</u-col>
		</u-row>
		<!-- 加载更多动画 -->
		<!-- <u-loading :show="true" style="position: absolute;left: 50%;"></u-loading> -->
		<!--引用组件，骨架屏-->
		<u-skeleton :loading="loading" :animation="true" bgColor="#FFF"></u-skeleton>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sortList: [
					{name:'默认'},
					{name:'销量'},
					{name:'推荐'},
					{name:'最新'},
				],
				current: 0,
				slides:[],
				goodsList:[{},{},{},{}],
				page:1,
				loading:false
			}
		},
		onLoad() {
			// this.$u.utils.isLogin()
			
			// 未进行api集中管理时的写法
			// const res= await this.$u.get('/api/index')
			this.getData()
			// this.$u.api.index().then(res=>{
			// 	console.log(res)
			// 	this.slides=res.slides
			// 	this.goods=res.goods.data
			// })

		},
		methods: {
			changeSort(index){
				// 根据点击的值重新进行商品排序
				this.current=index
				// 重置商品数据和分页
				this.goodsList=[{},{},{},{}]
				this.page=1
				this.getData()
			},
			async getData(){
				// 拿数据之前显示骨架屏
				this.loading=true
				
				const params={
					page:this.page
				}
				// 增加排序条件
				if(this.current == 1) params.sales = 1
				if(this.current == 2) params.recommend = 1
				if(this.current == 3) params.new = 1

				const res= await this.$u.api.index(params)
				
				// 拿数据之后骨架屏消失
				this.loading=false
				
				console.log(res)
				this.slides=res.slides
				// this.goods=res.goods.data
				this.goodsList=this.goodsList.pop().title ? [...this.goodsList,...res.goods.data] : res.goods.data
			}
		},
		// 页面生命周期，滚动到底部事件
		onReachBottom(){
			// 重新请求数据，带页码参数
			this.page=this.page + 1
			this.getData()
		}
	}
</script>

<style lang="scss" scoped>
   
</style>
