<template>
	<div class="classfiy">
        <div class="warp">
			<div class="head">			
			<div class="search">
				<router-link class="seach" :to="{path:'/search2'}">
				<img :src="sousuo">
				</router-link>
				<p>分类</p>
			</div>
		  </div>
       <div class="cz_warp" v-for="(item,idx) in newsList">
		<div class="cz">
				<p><img :src="xinxin">{{item.title}}<img :src="xinxin"></p>
		</div>

		<div class="czclass">
			<ul>
				<router-link v-for="(itm,idx) in item.class" key="idx" tag='li' :to="{name:'blusher',query:{title:itm.txt,index:itm.name}}">
					<img :src="itm.img">
					<p>{{itm.txt}}</p>
				</router-link>
			</ul>
		</div>
     </div>
	</div>
       <Foots/>
	</div>
</template>
<script>
   import Foots from './common/foots'
	export default{
		name: 'classfiy',
		data(){
			return{
			  newsList:{},
              classer:{},
              sousuo:{},
              xinxin:{},
              title:{},
              index:{}
			}
		},
	   created(){
	      this.$axios.get(this.HOST+"lovelinessData/index.json")
	     .then(res => {
	     this.newsList=res.data.classfiy 
	     this.sousuo=res.data.index.sousuo
	     this.xinxin=res.data.index.xinxin
	     })
	    .catch(error => {
	      console.log(error)
	    })
	   },
		components:{
			Foots
		},
		methods:{
		  opinion:function(){
           console.log('jhghjm');
		  }
		}
	}
</script>
<style scoped lang="less">
.classfiy{
	 width:100%;
	 height: 667/50rem;
	 background: #fff;
}
.warp{
	background: #fff;
	padding-bottom:70/50rem;
	box-sizing:border-box;
}
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
		
		&>p{
			display: inline-block;
			font-size: 18/50rem;
			color: #fff;
			line-height:25/50rem;
		}
	}
	img{
			width:25/50rem;
			height:25/50rem;
			margin-top:10/50rem;
			float: left;
		}

}
.cz_warp{
.cz{
	width:100%;
	overflow:hidden;
	&>p{
		line-height: 47/50rem;
		font-size:15/50rem;
		text-align:center;
		&>img{
			margin:0 5px;
		}
	}
		
}

.czclass{
	width:357/50rem;
	height:169/50rem;
	margin:0 auto;
	border-radius: 5px;
	border:1px solid #ddd;
	&>ul{
		width:310/50rem;
		margin:0 auto;
		&>li{
			width:76/50rem;
			height:85/50rem;
			text-align:center;
			float:left;
			font-size:13/50rem;
			&>img{
				width:30/50rem;
				height:40/50rem;
				margin-top:12/50rem;
			}
			&>p{
				margin-top:5/50rem;
			}
		}
	}
}
}
</style>



