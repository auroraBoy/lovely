<template>
	<div class="start-swiper">
	 <swiper :options="swiperOption">
	      <swiper-slide>
	      	<div class="text">
	      		<p class="first">全新首页</p>
	      		<p class="second">精选美丽文章&nbsp; 让你美丽在线</p>
	      	</div>
	        <img src="http://mraur.oss-cn-beijing.aliyuncs.com/img/guide1.jpg">
	        <div class="smallpic a">
	        	<img src="http://mraur.oss-cn-beijing.aliyuncs.com/img/guide11.jpg">
	        </div>

	        
	      </swiper-slide>
	      <swiper-slide>
	      	<div class="text">
	      		<p class="first">发现美丽</p>
	      		<p class="second">参与最火话题</p>
	      	</div>
	        <img src="http://mraur.oss-cn-beijing.aliyuncs.com/img/guide2.jpg">
	        <div class="smallpic b">
	        	<img src="http://mraur.oss-cn-beijing.aliyuncs.com/img/load21.png">
	        </div>
	      </swiper-slide>
	      <swiper-slide>
	      	
	      	<div class="text">
	      		<p class="first">关注美丽</p>
	      		<p class="second ">让你成为时尚博主</p>
	      	</div>
	        <img src="http://mraur.oss-cn-beijing.aliyuncs.com/img/guide3.png">
	        <div class="smallpic c">
	        	<img src="http://mraur.oss-cn-beijing.aliyuncs.com/img/my.png">
	        </div>
	        <router-link :to="{path:'/index'}">
        	<div class="txt">
        		<p>立即体验</p>
	        	<img src="http://mraur.oss-cn-beijing.aliyuncs.com/img/going.png">
	        </div>
	        </router-link>
	      </swiper-slide>
           
      <!-- Optional controls -->
      <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
    </swiper>
	</div>
</template>
<script>
	export default {
	    name: 'lunbo',
	    data () {
		    return {
		     	show: true,
		        swiperOption: {
	            // swiper options 所有的配置同swiper官方api配置
	            // autoplay: 1000,
	            grabCursor: true,
	            setWrapperSize: true,
	            autoHeight: true,
	            pagination: '.swiper-pagination',
	            paginationClickable: true,
	            mousewheelControl: true,
	            observeParents: true,
	            loop:false,
	            // swiper callbacks
	            // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
	            onTransitionStart (swiper) {
		            console.log(swiper.activeIndex)
		            console.log(this.child)
		       		}
		          // more Swiper configs and callbacks...
		          // ...	
	        	}

    		}
		},
		methods: {
		    change: function(){
		      this.show = !this.show;
		    }
	  	}
	}
</script>
<style scoped lang="less">
	.swiper-slide{
	  width:100%;
	  position: relative;
	  & img{
	    width:100%;
	  }
	  .text{
	  	position: absolute;
	  	top: 1.6rem;
	  	left: 1.53rem;
	  	color: #fff;
	  	p.first{
	  		font-size: 24/50rem;
	  		line-height: 17/50rem;
	  	}p.second{
	  		font-size: 16/50rem;
	  		line-height: 38/50rem;
	  		letter-spacing:2/50rem;
	  	}
	  }
	  .smallpic{
	  	position: absolute;
	  	width: 222/50rem;

	  	img{
	  		width: 222/50rem;
	  		transition: 1.2s 1s;
	  		-webkit-transition: -webkit-transform 1.2s linear;
		    transition: transform 1.2s linear;
	  	}
	  }
	  .a{
	  	top: 275/50rem;
	  	left: 76/50rem;
	  }
	  .b{
	  	top: 182/50rem;
	  	left: 76/50rem;
	  }
	  .c{
	  	top: 182/50rem;
	  	left: 76/50rem;
	  	box-shadow:0px 0px 50px 10px #f97496;
	  }
	  .txt{
	  	width: 100%;
	  	position: relative;
	  	top: -75/50rem;
	  	color: #fff;
	  	font-weight: 300;
	  	font-size: 18/50rem;
	  	text-align: center;
	  	img{
	  		margin-top: 10/50rem;
	  		width: 28/50rem;
	  		height: 21/50rem;
	  	}
	  }
	}
	.swiper-slide-active{
		.smallpic{
			img{
				transform:scale(1.2);
		  	    -webkit-transform:scale(1.2);
			}
		  	
		  	
		}
		.text{
			-webkit-animation:mymove 1.2s linear;
			}

		@keyframes mymove
		{
		from {top:0px;}
		to {top:80px;}
		}

		@-webkit-keyframes mymove /*Safari and Chrome*/
		{
		from {top:0px;}
		to {top:80px;}
		}
	}
	.txt{  
           animation: myfirst 2s infinite;  
       }  
         
       @keyframes myfirst {  
           0% {  
               transform: translate(0px, -10px);  
           }  
           50% {  
               transform: translate(0px, 10px);  
           }  
           100% {  
               transform: translate(0px, -10px);  
           }  
       } 
</style>
