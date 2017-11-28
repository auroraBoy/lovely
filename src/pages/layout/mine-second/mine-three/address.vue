<template>
	<div>

		<Headss/>
		<div class="warp">
		<div class="about">
			<div class="address">
				<div class="info">
					<span>阿花妹妹</span>
					<span>18235589555</span>
					<p>邮政编码：123456</p>
					<p>中国北京市昌平区</p>
				</div>
				<div>
					<img src="../../../../assets/images/address/1.png">
				</div>
			</div>
		</div>
        </div>

		
	</div>
</template>

<script>
    import Headss from "../../common/headss"
	export default {
	  name: 'address',
	  data () {
	    return {
	    }
	  },
	   components:{
	  	Headss
	  }
	}
</script>

<style scoped lang="less">
.head{
	width:100%;
	height:50/50rem;
	background:#ff406f;
	overflow: hidden;
	.search{
		margin:0 auto;
		width:96%;
		line-height:50/50rem;
		text-align: center;
		&>img{
			width:18/50rem;
			height:18/50rem;
			margin-top:15/50rem;
			float: left;
		}
		&>p{
			display: inline-block;
			font-size: 18/50rem;
			color: #fff;
			line-height:25/50rem;
		}
	}

}
.warp{
	width: 100%;
	height: 665/50rem;
	background-color: #fff;
	margin-top:-95/50rem;
.about{
	width:100%;
	background-color: #fff;
	height:105/50rem;
	padding-top:22/50rem;
	overflow:hidden;
	border-top:1px solid #ddd;
	border-bottom:1px solid #ddd;
	color:#808080;
	.address{
		width:323/50rem;
		height:64/50rem;
		margin:0 auto;
		.info{
			float:left;
			margin-top:0;
			&>span{
				line-height:28/50rem;
				font-size:14/50rem;
			}
			&>p{
				line-height:20/50rem;
				font-size:10/50rem;
			}
		}
		&>div{
			margin-top:19/50rem;
			&>img{
				width:20/50rem;
				height:20/50rem;
			}
			
			float:right;
		}
	}

}
}

</style>