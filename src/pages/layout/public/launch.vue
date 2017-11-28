<template>
  <div class="launch">
    <div class="box-up" v-for="(item,idx) in newsList">
    	<div class="list" @click="launchDetail">
        <img :src="item.img" class="banner">
        <div class="list-box">
        	<p>{{item.title}}</p>
        	<p>
            <span>{{item.time}}</span>
            <span>{{item.num}}</span>
          </p>
          <p>
            <span>{{item.num1}}</span>
            <span>{{item.num2}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: 'launch',
  data () {
    return {
      searchToPath:"/searchTo",
      topicPath:"/search2/topic",
      productPath:"/search2/product",
      usersPath:"/search2/users",
      flag:true,
      input1:"",
      tag:"",
      newsList:{}
    }
  },
    created(){
      this.$axios.get(this.HOST+"lovelinessData/second.json")
     .then(res => {
     this.newsList=res.data.launch
     })
    .catch(error => {
    })
   },
    methods: {
      launchDetail:function(event){
        this.$router.push({
          name:"articlez",
          query:{
            // input1:this.tag
          }
        })
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

// 25px   1rem = 50px;  0.5rem  
// 18px

// rem适合固定布局的形式
// 百分比 、 css3弹性盒子模型

.launch{
  background:#fff;
  border-radius: 0.15rem 0.15rem 0 0; 
  width: 95%;
  margin: 50/50rem auto 0;
  .box-up{
  	margin-top: 0.1rem;
  	
  	// padding-top: 0.4rem;
  	.list{
  		height: 160/50rem;
  		border: 1px solid #ccc;
  		box-shadow: 0rem 0rem 0.2rem #ccc;
  		padding-top: 0.6rem;
  		padding-left: 0.2rem;
  		box-sizing: border-box;
  		margin-bottom:0.1rem; 
  		border-radius: 0.15rem; 
  		.banner{
  			width: 3rem;
  			height: 1.6rem;
  			vertical-align: top;
  		}
  		.list-box{
  			display: inline-block;
  			height: 1.6rem;
  			padding-top: 15/50rem;
  			padding-left: 0.2rem;
  			box-sizing: border-box;
  			p:nth-child(1){
  				font-size: 20/50rem;
  				margin-bottom:0.6rem; 
  			}
  			p:nth-child(2){
  				font-size: 12/50rem;
  				width: 90/50rem;
  				display: inline-block;
  				span{
			        display:inline-block;
			        padding-left:13/50rem;
			        font-size:12/50rem;
		        }
  				span:nth-child(1){
		            background:url("../../../assets/main/BANNER_10.png") no-repeat;
		            background-size:12/50rem 12/50rem;
		        }
		        span:nth-child(2){
		          background:url("../../../assets/main/BANNER_11.png") no-repeat;
		          background-position:0 2/50rem;
		          background-size:12/50rem 8/50rem;
		        }
  			}
  			p:nth-child(3){
  				font-size: 12/50rem;
  				width: 86/50rem;
  				display: inline-block;
  				span{
  					// width: 60/50rem;
  					// height: 20/50rem;
			        display:inline-block;
			        padding-left:13/50rem;
			        font-size:12/50rem;
		        }
  				span:nth-child(1){
		            background:url("../../../assets/main/BANNER_15.png") no-repeat;
		            background-size:12/50rem 12/50rem;
		        }
		        span:nth-child(2){
		          background:url("../../../assets/main/BANNER_12.png") no-repeat;
		          // background-position:0 2/50rem;
		          background-size:12/50rem 12/50rem;
		        }
  			}

  		}
  	}
  	// height: 155/50rem;

  } 
 
}

</style>

