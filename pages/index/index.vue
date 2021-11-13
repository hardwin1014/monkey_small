<template>
	<view class="container">
		<button type="default" @click="btn">点击</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {
      btn(){
				// 显示
				// uni.showToast({
				// 	title: "晚上好啊！",
				// 	duration: 700
				// 
				
				// uni.showLoading({
				//     title: '加载中'
				// });
				
				// setTimeout(function () {
				//     uni.hideLoading(); // 隐藏消息提示框
				// }, 2000);
				
				// 模态框
				// uni.showModal({
				//     title: '提示',
				//     content: '这是一个模态弹窗',
				//     success: function (res) {
				//         if (res.confirm) {
				//             console.log('用户点击确定');
				//         } else if (res.cancel) {
				//             console.log('用户点击取消');
				//         }
				//     }
				// });
				
				// 从底部弹出
				// uni.showActionSheet({
				//     itemList: ['A', 'B', 'C'],
				//     success: function (res) {
				//         console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
				//     },
				//     fail: function (res) {
				//         console.log(res.errMsg);
				//     }
				// });
				
				// uni.setNavigationBarTitle({
				//     title: '新的标题'
				// });
				uni.hideNavigationBarLoading()
				uni.setNavigationBarColor({
				    frontColor: '#ffffff',
				    backgroundColor: '#ff0000',
				    animation: {
				        duration: 400,
				        timingFunc: 'easeIn'
				    }
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
