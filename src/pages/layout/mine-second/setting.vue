<template>
	<div class="vessel">
		<div class="head">
			<div class="head-nav">
				<div class="head-img">
					<img onclick="window.history.go(-1)" src="../../../assets/images/goods/go.png">
					<p>设置</p>
				</div>
			</div>
		</div>
		<div class="subject-body">
			<div class="subject-body-txt">
				<ul>
					<router-link tag='li' :to="{path:'/material'}"><img src="../../../assets/images/set/1.png" alt=""><a href="#">个人资料</a></router-link>
					<router-link tag='li' :to="{path:'/bindphone'}"><img src="../../../assets/images/set/2.png" alt=""><a href="#">绑定</a></router-link>
					<router-link tag='li' :to="{path:'/address'}"><img src="../../../assets/images/set/3.png" alt=""><a href="#">收货地址</a></router-link>
					<li><img src="../../../assets/images/set/4.png" alt=""><a href="#">清除缓存</a></li>
					<li>
						<img src="../../../assets/images/set/5.png" alt="">
						<a href="#">小屏模式（省高达70%流量）</a>
						<el-tooltip :content="''" placement="" class="switch">
							  <el-switch v-model="value5" active-color="#13ce66" inactive-color="#ff4949"
							    active-value="100" inactive-value="0">
							  </el-switch>
						</el-tooltip>

					</li>
					<li><img src="../../../assets/images/set/6.png" alt=""><a href="#">消息推送</a></li>
					<router-link tag='li' :to="{path:'/abouts'}"><img src="../../../assets/images/set/7.png" alt=""><a href="#">关于loveliness</a></router-link>
					<router-link tag='li' :to="{path:'/help'}"><img src="../../../assets/images/set/8.png" alt=""><a href="#">帮助</a></router-link>
					<router-link tag='li' :to="{path:'/airlines'}"><img src="../../../assets/images/set/9.png" alt=""><a href="#">意见反馈</a></router-link>
				</ul>
			</div>
			<router-link tag='button' :to="{path:'/logins'}" type="button">退出登录</router-link>
		</div>
	</div>
</template>
<script>
export default {
  name: 'setting',
  data(){
  	return{
  		 value5: '100'
	}
  }
}
</script>
<style scoped lang="less">
.vessel{
		width: 100%;
		height: 667/50rem;
		margin: 0 auto;
		.head{
			width: 100%;
			height: 50/50rem;
			background: #ff406f;
			.head-nav{
				width: 98%;
				height: 48/50rem;
				margin: 0 auto;
				.head-img{
					margin: 0 auto;
					text-align: center;
					width: 96%;
					line-height: 48/50rem;

					p{
						display: inline-block;
						font-size: 17/50rem;
						color: #fff; 

					}
					img{
						margin-top:15/50rem;
						height: 20/50rem;
						&:nth-child(1){
							line-height: 48/50rem;
							float: left;
						}
						&:nth-child(3){
							line-height: 48/50rem;
							float: right;
						}
					}
				}
			}
		}
		.subject-body{
			width: 358/50rem;
			height: 600/50rem;
			background: #fff;
			margin: 0 auto;
			border-radius: 5/50rem;
			box-shadow:0px 0px 5px 1px #bbb;
			text-align: center;
			.subject-body-txt{
				text-align: left;
				font-size: 14/50rem;
				font-family:宋体;
				color: #4D4D4D;
				position: relative;
				top: 23/50rem;
				ul{
					li{
						height: 26/50rem;
						margin-bottom: 24/50rem;
						margin-left: 15/50rem;
						position: relative;
						&>.el-switch{
							line-height: 10px;
							position: absolute;
							right:20/50rem;
							top:0.1rem;
						}
						img{
							margin-right: 8/50rem;
							width: 19/50rem;
							height: 19/50rem;
							position: relative;
							top: 4.5/50rem;
						}
					}
				}
			}
			button{
				width: 277/50rem;
				height: 42/50rem;
				border-radius: 10/50rem;
				border: none;
				background: #fff;
				margin-top: 23/50rem;
				box-shadow:0px 0px 20px 2px #ccc;
				font-size:14/50rem;
				outline:none;
			} 
		}
	}
</style>
