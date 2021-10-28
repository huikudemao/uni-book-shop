<template>
	<view>
		<!-- 地址模块 -->
		<navigator class="dizhi" url="/pages/address/index">
			<view class="dizhi_dizhi">
			{{this.address.province + this.address.city + this.address.county + this.address.address}}
			</view>
			<view class="Telephone">
				<view>{{this.address.name}}<span>{{this.address.phone}}</span></view>
			</view>
			<view class="info">
				<u-icon name="arrow-right" color="#C0C4CC" size="28"></u-icon>
			</view>
		</navigator>
		<!-- 商品显示模块 -->
		<view class="commodity" v-for="item in list" :key="item.id">
			<view class="item">
				<view class="item_image">
					<image :src="item.goods.cover_url"></image>
				</view>
				<view class="title">
					<view class="title_item">{{item.goods.title}}</view>
					<view class="price">
						<view class="price_price">
							￥{{item.goods.price}}
							<span>x{{item.num}}</span>
							</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部合计模块 -->
		<view class="bottom">
			<view class="price">
				合计：<span>￥{{Totalprice}}<span>.00</span></span>
			</view>
			<view class="btn">
				<button @click="defray">提交订单</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[], // 商品数据
				address:[], // 地址
			}
		},
		// 页面加载完生命周期函数
		onLoad() {
			this.getDtata()
			
		},
		// 计算属性
		computed:{
			// 计算商品的总价格
			Totalprice(){
				let sums = 0
				let sum = 0
				this.list.forEach(item => {
					// 商品数量*商品价格
					sum = item.num * item.goods.price
					sums += sum
				})
				return sums
			}
		},
		methods: {
			// 请求订单预览接口
			async getDtata(){
				const res = await this.$u.api.preview()
				console.log(res);
				// carts商品数量、是否选中等信息，carts.goods商品名称等信息
				this.list = res.carts
				// 用户信息
				const data = res.address
				data.forEach(data => {
					// 判断是不是默认地址 1默认 is_default = 1
					if(data.is_default === 1){
						return this.address = data
					}
				})
				// console.log(this.address);
			},
			defray(){
				this.$u.route({
					url: 'pages/address/defray',
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background: #f5f5f5;
	}
	
	.dizhi{
		position: relative;
		background: #FFFFFF;
		margin: 20rpx 20rpx 0 20rpx;
		height: 150rpx;
		border-radius: 20rpx;
		padding-left: 20rpx;
		.dizhi_dizhi{
			font-size: 32rpx;
			padding-top: 20rpx;
			font-weight: 600;
		}
		.Telephone{
			padding-top: 20rpx;
			color: #9e9e9e;
			span{
				margin-left: 20rpx;
			}
		}
		.info{
			position: absolute;
			right: 20rpx;
			top: 50rpx;
		}
	}
	
	.commodity{
		background: #FFFFFF;
		margin: 20rpx 20rpx 0 20rpx;
		border-radius: 20rpx;
		.item{
			display: flex;
			height: 250rpx;
			.item_image{
				flex: 2;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.title{
				flex: 3;
				.title_item{
					font-size: 32rpx;
					font-weight: 600;
					margin-top: 20rpx;
				}
				.price{
					margin-top: 130rpx;
					.price_price{
						color: red;
						font-weight: 600;
						font-size: 32rpx;
						span{
							float: right;
							font-weight: 500;
							font-size: 30rpx;
							color: #404040;
							margin-right: 30rpx;
						}
					}
				}
			}
		}
	}
	.bottom{
		background: #FFFFFF;
		height: 100rpx;
		position: fixed;
		bottom: 0;
		width: 100%;
		padding-left: 100rpx;
		line-height: 100rpx;
		display: flex;
		.price{
			flex: 1;
			text-align: right;
			font-weight: 600;
			font-size: 32rpx;
			span{
				color: #e81534;
				font-size: 38rpx;
				font-weight: 700;
				span{
					font-size: 20rpx;
					font-weight: 600;
				}
			}
		}
		.btn{
			flex: 1;
			button{
				margin-left: 20rpx;
				border-radius: 40rpx;
				background: #e90c21;
				color: #FFFFFF;
				width: 250rpx;
				height: 80rpx;
				line-height: 80rpx;
				margin-top: 10rpx;
			}
		}
	}
</style>
