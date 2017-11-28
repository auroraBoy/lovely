<template>
  <div class="collect-product-list">
  	<router-link :to="{name:'shopdetail',query:{title:'产品详情'}}">
     <div class="product-item">
     	<img src="../../../../assets/home-images/shop.png">
     	<div class="product-desc">
     		<p>PAUL&JOE&nbsp;双色腮红</p>
     		<p>参考价:￥<span>230</span><a href="javascript:;">221</a></p>
     	</div>
  	</div>
  </router-link>
  <router-link :to="{name:'shopdetail',query:{title:'产品详情'}}">
  	 <div class="product-item a">
     	<img src="../../../../assets/home-images/shop.png">
     	<div class="product-desc">
     		<p>PAUL&JOE&nbsp;双色腮红</p>
     		<p>参考价:￥<span>230</span><a href="javascript:;">221</a></p>
     	</div>
  	</div>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'collect',
  data(){
    return{
  }
  }
}

</script>

<style scoped lang="less">
.collect-product-list{
	width: 100%;
	height: 160/50rem;
	padding: 0 25/50rem;
	box-sizing: border-box;
	border-radius: 10px;
	&>div:nth-child(2){
		float: right;
	}
	.product-item{
		float: left;
		width:160/50rem;
		height:160/50rem;
		box-shadow:0px 0px 20px 1px #ccc;
		border-radius: 10px;
		&>img{
			width:100%;
			border-radius: 10px 10px 0 0 ;
			hieght:120/50rem;
		}
		.product-desc{
			padding:8/50rem 9/50rem; 
			height:40/50rem;
			background: #fff;
			box-sizing: border-box;
			&>p{
				color:#7b7b7b;
				margin-bottom: 5/50rem;
				font-size: 8/50rem;
				&>span{
					margin-left: 8/50rem;
				}
				&>a{
					float: right;
					position: relative;
					&:before{
						content: "";
						width:14/50rem;
						height: 12/50rem;
						background: url(../../../../assets/home-images/pinglun.png);
						background-size:14/50rem 12/50rem;
						position: absolute;
						left:-15px;
						top:0px;
					}
				}
			}
		}
	}
	.a{
		margin-left: 5/50rem;
	}
}
</style>