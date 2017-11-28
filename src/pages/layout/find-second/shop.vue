<template>
	<div class="shop">
	  <Heads/>
	  <div class="findTo_warp">
	  	<div class="subject-top">
			<div class="subject-top-img">
				<img :src="topimg">
			</div>
		</div>
	   <!-- 商品 -->
	   <Commodity/>
	   <div class="shop-list">
		<h2><i></i>&nbsp;&nbsp;&nbsp;LOLI专题&nbsp;&nbsp;&nbsp;<i></i></h2>

		<div class="shop-item" v-for="(item,key) in newsList" key="key">
			<div class="shop-image">
				<img :src="item.img">
			</div>
			<div class="shop-desc">
				<p>{{item.title}}</p>
				<p>{{item.txt}}</p>
				<p class="price">{{item.pirce}}</p>
			</div>
		</div>
	   </div>
	  </div>
	</div>
</template>
<script>
    import Heads from '../common/heads'
    import Commodity from './find-common/commodity'
	export default{
		name:'shop',
		data(){
			return{
             newsList:{},
             topimg:{}
			}
		},
		components:{
			Heads,
			Commodity
		},
	created(){
      this.$axios.get(this.HOST+"lovelinessData/second.json")
     .then(res => {
     this.newsList=res.data.shop
     this.topimg=res.data.shoptop
     })
    .catch(error => {
      console.log(error)
    })
   }
	}
</script>
<style scoped lang='less'>
   .shop{
   	width: 100%;
   	height: 740/50rem;
   	background-color: #fff;
   }
	.findTo_warp{
	 width:95%;
      margin:-80/50rem auto 0;
      	.subject-top{
			width:100%;
			background: #fff;
			border-radius:5/50rem;
			box-shadow:0px 0px 12px 2px #bbb;
			.subject-top-img{
				margin: 0 auto;
				height: 150/50rem;
				img{
					width: 100%;
					height: 100%;
				}	
			}
		}
	   .subject-body-warp{
			margin-top:25/50rem;
		}
     }
     .shop-list{
	h2{
		font-size:15.1/50rem;
		font-weight:600;
		text-align:center;
		letter-spacing:1px;
		margin-top:20/50rem;
		margin-bottom:20/50rem;
		&>i{
			 display:inline-block;
			width:0.2rem;
			height:0.2rem;
			background: url(http://mraur.oss-cn-beijing.aliyuncs.com/img/heart.png)
		}
	}
	.shop-item{
		background:#fff;
		width:355/50rem;
		height:115/50rem;
		padding:15/50rem 10/50rem;
		box-sizing:border-box;
		border-radius: 5px;
		margin:0 auto;
		margin-bottom: 20/50rem;
		box-shadow:0px 0px 20px 1px #ccc;
		.shop-image{
			float:left;
			&>img{
			width:90/50rem;
			height:90/50rem;
			margin-right:30/50rem;
			}
		}
	}
	.shop-desc{
       float:left;
       &>p{
       	font-size: 9/50rem;
       	margin-bottom: 10/50rem;
       	color:#A5A5A5;
       	&.price{
       		font-size: 10/50rem;
       		color:#909090;
       	}
       }
	}
}
</style>
