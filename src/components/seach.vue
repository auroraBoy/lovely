<template>
	<div class="vessel">
		<div class="head">
			<div class="head-nav">
				<div class="head-img">
					<img src="../../assets/images/register/sousuo.png">
					<p>发现</p>
					<img src="../../assets/images/register/@.png">
				</div>
			</div>
		</div>
		<div class="subject">
			<img src="../../assets/images/register/1.png">
			<img src="../../assets/images/register/2.png">
			<img src="../../assets/images/register/3.png">
		</div>
	</div>
</template>

<script>
export default {
  name: 'finds',
  data(){
  	return{
	}
  }
}

</script>

<style scoped lang="less">
	.vessel{
		width: 100%;
		height: 14rem;
		background: #000;

		.head{
			width: 100%;
			height: 110/50rem;
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
					position: relative;
					p{
						display: inline-block;
						font-size: 25/50rem;
						color: #fff;
					}
					img{
						margin-top:15/50rem;
						height: 25/50rem;
					}
				}
			}
		}
		.subject{
			width: 355/50rem;
			height: 169/50rem;
			background: #fff;
			border-radius: 5px;
			position: absolute;
			top: 64/50rem;
			right: 10/50rem;
			img{
				width: 105/50rem;
				height: 130/50rem;
				// margin-right:15/50rem;
				display: -webkit-flex;
			    // display: flex;
			}
		}
	}
	.head-img img:nth-child(1){
		line-height: 48/50rem;
		float: left;
	}
	.head-img img:nth-child(3){
		height: 25/50rem;
		line-height: 48/50rem;
		float: right;
	}
</style>
