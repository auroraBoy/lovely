<template>
	<div class="blusher">
	  <Headss/>
	  <div class="findTo_warp">
	  		<div class="subject-body" v-for="(item,idx) in newsList">
			<div class="subject-body-img">
				<router-link :to="{name:'shopdetail',query:{title:'产品详情',id:item.leftid}}">
				<img :src="item.leftimg" alt="" class="img">
				</router-link>
				<router-link :to="{name:'shopdetail',query:{title:'产品详情',id:item.rightid}}">	
				<img :src="item.rightimg" alt="" class="img">
				</router-link>
			</div>
			<div class="subject-body-txt">
				<p>{{item.lefttitle}}</p>
				<p>{{item.leftpirce}}</p>
				<p><img src="http://mraur.oss-cn-beijing.aliyuncs.com/img/pinglun.png" alt="">{{item.leftnum}}</p>
			</div>
			<div class="subject-body-txt-1">
				<p>{{item.righttitle}}</p>
				<p>{{item.rightpirce}}</p>
				<p><img src="http://mraur.oss-cn-beijing.aliyuncs.com/img/pinglun.png" alt="">{{item.rightnum}}</p>
			</div>
		</div>
	
		
	
	  </div>
	</div>
</template>
<script>
    import Headss from '../common/Headss'
	export default{
		name:'blusher',
		data(){
			return{
              name:"a1",
              newsList:{}
			}
		},
		components:{
			Headss
		},
		created(event){
	      this.$axios.get(this.HOST+"lovelinessData/shop.json")
	     .then(res => {
	     this.name=this.$route.query.index
	     var index=this.name
	     this.newsList=res.data.product[index]
	     })
	    .catch(error => {
	      console.log(error)
	    })
   }
	}
</script>
<style scoped lang='less'>
  .img{
  	width: 145/50rem;
  	height: 130/50rem;
  }
   .blusher{
   	width: 100%;
   	height: 785/50rem;
   	background-color: #fff;
   }
	.findTo_warp{
	 width:95%;
     margin:-80/50rem auto 0;
     overflow: hidden;
		.subject-body{
			width:97%;
			margin:0 auto;
			overflow: hidden;
			height: 168/50rem;
			background: #fff;
			border-radius: 17/50rem;
			margin-bottom:10/50rem;
			box-shadow:0px 0px 10px 1px rgba(0,0,0,.2);
			.subject-body-img{
			   a{
			   	img{
				width: 170/50rem;
				}
			   	&:nth-child(2){
					float: right;
					}	
			   }
			}
			.subject-body-txt,.subject-body-txt-1{
				width: 48%;
				margin-left:4/50rem;
				float: left;
				display: block;
				img{
					width: 15/50rem;
					height: 12/50rem;
					display: block;
					margin-top: 1/50rem;
					float: left;
				}
				p{
					font-size: 4/50rem;
					font-family:微软雅黑;
                    margin-bottom:3/50rem;
					&:nth-child(2){
						float: left;
					}
					&:nth-child(3){
						float: right;
						margin-right: 15/50rem;
					}
				}
			}
		}
     }
</style>
